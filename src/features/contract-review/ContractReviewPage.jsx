import {useLocation} from "react-router-dom";
import NavigationBar from "../../common/components/NavigationBar.jsx";
import DividerLine from "../../common/components/DividerLine.jsx";
import ContractViewer from "./sub-features/contract-viewer/ContractViewer.jsx";
import ContractAnalysis from "./sub-features/contract-analysis/ContractAnalysis.jsx";
import './ContractReviewPage.css';
import {resetState} from "../main-page/sub-features/new-contract-upload/slice/newContractSlice.js";
import {resetAnalysisState} from "./sub-features/contract-analysis/slice/contractAnalysisSlice.js";
import {useDispatch} from "react-redux";

function ContractReviewPage() {
    const location = useLocation();
    const htmlContent = location.state?.html;
    const dispatch = useDispatch();

    function onBackTap() {
        dispatch(resetState());
        dispatch(resetAnalysisState());
    }

    return (
        <div>
            <NavigationBar showBackIcon={true} onBackTap={onBackTap}/>
            <div className="contract-review-page">
                <ContractViewer htmlContent={htmlContent}/>
                <DividerLine/>
                <ContractAnalysis/>
            </div>
        </div>
    );
}

export default ContractReviewPage;