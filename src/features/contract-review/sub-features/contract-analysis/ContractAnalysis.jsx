import './ContractAnalysis.css'
import {useSelector} from "react-redux";
import ExplanationSection from "./components/ExplanationSection.jsx";
import RiskOverviewSection from "./components/RiskOverviewSection.jsx";
import AnalysisDetails from "./components/AnalysisDetails.jsx";
import CircularProgressIndicator from "../../../../common/components/CircularProgressIndicator.jsx";
import DividerLine from "../../../../common/components/DividerLine.jsx";

function ContractAnalysis() {

    const {explanationDetails, riskAssessment} = useSelector(state => state.contractAnalysis);
    const {isLoading, assessment} = riskAssessment;

    return (
        <div className="contract-analysis">
            <ExplanationSection {...explanationDetails}/>
            {isLoading && <DividerLine isVertical={false}/>}
            {!isLoading && <RiskOverviewSection
                riskScore={assessment.riskScore}
                numHighRiskClauses={assessment.highRiskClauses.length}/>}
            <AnalysisDetails
                highRiskClauses={assessment.highRiskClauses}
                isLoading={isLoading}
            />
            {isLoading &&
                <div className="loading-div" style={{height: '200px'}}>
                    <CircularProgressIndicator/>
                    <h2 className={'upload-contract-section--title'}>Reviewing your contract...</h2>
                </div>
            }
        </div>
    );
}

export default ContractAnalysis;