import {highRiskClausesPropType} from "../misc/high_risk_clauses_prop_type.js";
import HighRiskClausesList from "./HighRiskClausesList.jsx";
import GeneralGuidanceSection from "./GeneralGuidanceSection.jsx";
import PropTypes from "prop-types";

function AnalysisDetails({highRiskClauses, isLoading}) {
    return (
        <div>
            {!isLoading && <HighRiskClausesList highRiskClauses={highRiskClauses}/>}
            <GeneralGuidanceSection/>
        </div>
    );
}

AnalysisDetails.propTypes = {
    highRiskClauses: highRiskClausesPropType,
    isLoading: PropTypes.bool.isRequired,
};

export default AnalysisDetails;