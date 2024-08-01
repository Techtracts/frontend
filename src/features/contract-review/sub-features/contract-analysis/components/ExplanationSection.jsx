import '../styles/ExplanationSection.css';
import PropTypes from "prop-types";
import CircularProgressIndicator from "../../../../../common/components/CircularProgressIndicator.jsx";
import ToggleList from "./ToggleList.jsx";

function ExplanationSection({clauseLocation, explanation, isLoading}) {
    return (
        <div className={'contract-analysis--padding'}>
            <ToggleList
                titleString="Interpretation"
                isOpen={isLoading || !!explanation}
                addBottomMargin={false}
            >
                {clauseLocation &&
                    <p className="clause-id">
                        Clause {clauseLocation.split('.').slice(1).join('.')}:
                    </p>
                }
                {isLoading &&
                    <div className="loading-div" style={{height: '100%'}}>
                        <CircularProgressIndicator/>
                        <h2 className={'upload-contract-section--title'}>Asking AI...</h2>
                    </div>
                }
                {!isLoading &&
                    <p className={
                        explanation ? 'toggle-list-content' : 'greyed-out-text toggle-list-content'
                    } style={{marginLeft:'0px'}}>
                        {explanation || 'Click on a clause to see its interpretation here'}
                    </p>
                }
            </ToggleList>
        </div>
    )
}

ExplanationSection.propTypes = {
    clauseLocation: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default ExplanationSection;