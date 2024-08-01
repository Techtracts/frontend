import ToggleList from "./ToggleList.jsx";
import {highRiskClausesPropType} from "../misc/high_risk_clauses_prop_type.js";
import DividerLine from "../../../../../common/components/DividerLine.jsx";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {getExplanationOfHighRiskClause} from "../slice/risky_clause_actions.js";
import CircularProgressIndicator from "../../../../../common/components/CircularProgressIndicator.jsx";
import {useState} from "react";

function HighRiskClausesList({highRiskClauses}) {
    const dispatch = useDispatch();
    const contract_id = useSelector(state => state.contractAnalysis.contractId);
    const selectedRiskClause = useSelector(state => state.contractAnalysis.riskAssessment.selectedRiskClause);
    const selectedRiskClauseLocation = selectedRiskClause.clauseLocation
    const selectedRiskClauseIsLoading = selectedRiskClause.isLoading
    const selectedRiskClauseDescription = selectedRiskClause.description

    function buildChildren() {

        function buildClauseTitle(clause) {
            return <p>
                {clause.title} {' '}
                <span className="hyperlink-text--purple">{clause.clauseId}</span>{' '}
            </p>;
        }

        function requestHighRiskClauseExplanation(clause) {
            const element = document.querySelector(`[contract-location="${clause.clauseLocation}"]`);
            let elementText = '';
            if (element) {
                elementText = element.innerText;
            }
            const explanationRequest = {
                contract_id: contract_id,
                risky_clause: {
                    clause_id: clause.clauseLocation,
                    risk_level: clause.riskLevel,
                    risk_factor: clause.riskFactors,
                    title: clause.title,
                    text: elementText,
                },
            }
            console.log('Explanation request:', explanationRequest);
            dispatch(
                getExplanationOfHighRiskClause(explanationRequest)
            );
        }

        return highRiskClauses.map(clause => {
            const shouldBeOpen = clause.clauseLocation === selectedRiskClauseLocation;
            return (
                <div key={clause.clauseLocation}>
                    <div style={{marginLeft: '40px', marginTop: '8px', marginBottom: '4px'}}>
                        <ToggleList
                            titleComponent={buildClauseTitle(clause)}
                            showDividerLine={false}
                            isOpen={shouldBeOpen}
                            onToggle={(isOpen) => {
                                if (isOpen) {
                                    requestHighRiskClauseExplanation(clause);
                                }
                            }}
                        >
                            {selectedRiskClauseIsLoading && (
                                <div className="loading-div" style={{height: '100%'}}>
                                    <CircularProgressIndicator/>
                                    <h2 className={'upload-contract-section--title'}>Asking AI...</h2>
                                </div>
                            )}
                            {!selectedRiskClauseIsLoading && (
                                <p className={'toggle-list-content'} style={{marginRight: '20px', marginLeft:'0px'}}>
                                    {selectedRiskClauseDescription}</p>
                            )}
                        </ToggleList>
                    </div>
                    <DividerLine
                        isVertical={false}
                        colorOverride={'#d7d7d7'}
                    />
                </div>
            )
        });
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <ToggleList
                titleString={"High risk clauses"}
                childIndentation={'0px'}
                headerStyle={{marginLeft: '16px', marginTop: '16px'}}
                onToggle={(openState) => {
                    setIsOpen(openState);
                }}
                addBottomMargin={!isOpen}
            >
                {buildChildren()}
            </ToggleList>
            <DividerLine isVertical={false}/>
        </div>
    );
}


HighRiskClausesList.propTypes = {
    highRiskClauses: highRiskClausesPropType,
}

export default HighRiskClausesList;