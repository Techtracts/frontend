import PropTypes from "prop-types";
import '../styles/RiskOverviewSection.css';
import RiskLevelBars from "./RiskLevelBars.jsx";
import DividerLine from "../../../../../common/components/DividerLine.jsx";
import CTAButton from "../../../../../common/components/CTAButton.jsx";
import SpreadSheetDialog from "./Spreadsheet.jsx";
import {useState} from "react";

function RiskOverviewSection({
                                 riskScore,
                                 numHighRiskClauses
                             }) {

    const [open, setOpen] = useState(false);

    function setDialogOpen(value) {
        setOpen(value);
    }

    return (
        <div>
            <DividerLine isVertical={false}/>
            <div className={'risk-overview'}>
                <RiskLevelBars riskScore={riskScore}/>
                <p className={'risk-overview--text'}>{numHighRiskClauses} high risk clauses - {scoreToRiskLevel(numHighRiskClauses)} exposure
                    to risk</p>
                <CTAButton text={'Show risk graph'} onTap={() => setDialogOpen(true)} paddingOverride={'10px 40px'}
                           marginOverride={'0px'}/>
            </div>
            <DividerLine isVertical={false}/>
            <SpreadSheetDialog
                open={open}
                onClose={() => setDialogOpen(false)}
            />
        </div>
    );
}

function scoreToRiskLevel(score) {
    if (score === 0) {
        return 'Low';
    }

    if (score === 1) {
        return 'Moderate';
    }

    if (score === 2) {
        return 'Some';
    }

    if (score === 3) {
        return 'High';
    }

    return 'Significant';
}

RiskOverviewSection.propTypes = {
    riskScore: PropTypes.number.isRequired,
    numHighRiskClauses: PropTypes.number.isRequired
}

export default RiskOverviewSection;