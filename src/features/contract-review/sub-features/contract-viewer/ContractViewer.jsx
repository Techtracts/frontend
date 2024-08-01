import {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import './ContractViewer.css';
import {useDispatch, useSelector} from "react-redux";
import {getExplanation} from "../contract-analysis/slice/explanation_actions.js";
import {setExplanationClauseLocation} from "../contract-analysis/slice/contractAnalysisSlice.js";

function ContractViewer({htmlContent}) {
    const viewerRef = useRef(null);
    const dispatch = useDispatch();
    const contractId = useSelector(state => state.contractAnalysis.contractId);
    const explanationIsUpdating = useSelector(state => state.contractAnalysis.explanationDetails.isUpdating);
    const {selectedRiskClause, assessment} = useSelector(state => state.contractAnalysis.riskAssessment);
    const selectedRiskClauseLocation = selectedRiskClause.clauseLocation;
    const {highRiskClauses} = assessment;

    useEffect(() => {
        if (selectedRiskClauseLocation) {
            const element = document.querySelector(`[contract-location="${selectedRiskClauseLocation}"]`);
            if (element) {
                element.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        }
    }, [selectedRiskClauseLocation]);

    useEffect(() => {
        highRiskClauses.forEach(clause => {
            const elements = document.querySelectorAll(`[contract-location="${clause.clauseLocation}"]`);
            elements.forEach(element => {
                element.classList.add('high-risk-clause');
            });
        });
    }, [highRiskClauses]);

    useEffect(() => {
        // Add click event listener to the contract viewer to ask for an explanation and
        const handleClick = (event) => {
            if (explanationIsUpdating) {
                // Disable double explanations
                return;
            }

            let target = event.target;

            const destructuredClause = [];
            // Remove all selected-clause classes from list items
            const allListItems = viewerRef.current.querySelectorAll('li[contract-location]');
            allListItems.forEach(li => li.classList.remove('selected-clause'));

            let clauseLocSet = false
            let selectedClauseLocation = null;

            // Traverse up the DOM tree and collect `data-list-text` values and associated content
            while (target !== viewerRef.current) {
                if (target.getAttribute('data-list-text')) {

                    const contractLocation = target.getAttribute('contract-location');
                    if (contractLocation && !clauseLocSet) {
                        // Add selected-clause class to list item
                        console.log('Setting explanation clause location:', contractLocation);
                        selectedClauseLocation = contractLocation;
                        dispatch(setExplanationClauseLocation(contractLocation));
                        target.classList.add('selected-clause');
                        clauseLocSet = true;
                    }

                    const dataValue = target.getAttribute('data-list-text');
                    let directText = '';

                    for (let node of target.childNodes) {
                        if (node.nodeName === 'P' || node.nodeName === 'H1') {
                            directText += node.innerText;
                        }
                    }

                    const clausePart = {
                        'id': dataValue,
                        'text': directText,
                    };
                    destructuredClause.unshift(clausePart);
                }
                target = target.parentElement;
            }

            if (destructuredClause.length > 0) {
                const explanationRequest = {
                    clause_location: selectedClauseLocation,
                    contract_id: contractId,
                    destructured_clause: destructuredClause,
                    // Add this to the request to force the hardcoded explanation to be used (to avoid calling the AI)
                    force_hardcoded_explanation: false,
                }
                console.log('Explanation request:', explanationRequest);
                dispatch(getExplanation(explanationRequest));
            }
        };

        // Add click event listener
        const viewerElement = viewerRef.current;
        viewerElement.addEventListener('click', handleClick);

        // Cleanup event listener
        return () => {
            viewerElement.removeEventListener('click', handleClick);
        };
    }, [contractId, dispatch, explanationIsUpdating]);

    return (
        <div className={"contract-viewer"} ref={viewerRef}>
            <div id={'html-viewer'} dangerouslySetInnerHTML={{__html: htmlContent}}/>
        </div>
    );
}

ContractViewer.propTypes = {
    htmlContent: PropTypes.string.isRequired,
}

export default ContractViewer;