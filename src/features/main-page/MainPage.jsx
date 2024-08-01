import NavigationBar from "../../common/components/NavigationBar.jsx";
import UploadContractSection from "./sub-features/new-contract-upload/components/UploadContractSection.jsx";
import HistorySection from "./sub-features/history-section/components/HistorySection.jsx";
import DividerLine from "../../common/components/DividerLine.jsx";
import './styles/MainPage.css';
import {useState} from "react";
import {convertNewContract} from "./sub-features/new-contract-upload/slice/actions.js";
import {useDispatch, useSelector} from "react-redux";
import DisclaimerDialog from "./sub-features/new-contract-upload/components/DisclaimerDialog.jsx";
import AdditionalDetailsForm from "./sub-features/new-contract-upload/components/AdditionalDetailsForm.jsx";
import {newContractUploadStatus} from "./sub-features/new-contract-upload/slice/newContractUploadStatus.js";
import {resetState} from "./sub-features/new-contract-upload/slice/newContractSlice.js";
import CircularProgressIndicator from "../../common/components/CircularProgressIndicator.jsx";
import {useNavigate} from "react-router-dom";
import {reviewContract} from "../contract-review/sub-features/contract-analysis/slice/review_actions.js";

function MainPage() {
    const [isSplitScreen, setIsSplitScreen] = useState(false);
    const [disclaimerDialogOpen, setDisclaimerDialogOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {payload, error, status} = useSelector((state) => state.newContract);
    const isLoading = status === newContractUploadStatus.UPLOADING;
    const contractSuccessfullyUploaded = status === newContractUploadStatus.UPLOADED && payload !== null;

    function onFileSelect(file) {
        console.log('Selected file:', file);
        setSelectedFile(file);
        setIsSplitScreen(true);
        setDisclaimerDialogOpen(true);
    }

    function convertContract(file) {
        console.log('Processing contract:', file);
        dispatch(convertNewContract(file));
    }

    function onAdditionalDetailsCancel() {
        setIsSplitScreen(false);
        setSelectedFile(null);
        dispatch(resetState());
    }

    function beginContractReview(formData) {
        const {contractType, contractParty, jurisdiction, industry} = formData;
        const reviewRequest = {
            contract_id: payload.contract_id,
            contract_details: {
                contract_type: contractType,
                jurisdiction: jurisdiction,
                industry: industry,
                contract_party: contractParty,
            },
        };
        dispatch(reviewContract(reviewRequest))
        const stateObject = {state: {'html': payload.html}}
        navigate('/contract-review', stateObject);
    }

    function getMainSection() {
        if (!isSplitScreen) {
            return (
                <div className="content-container">
                    <HistorySection/>
                    <DividerLine/>
                    <UploadContractSection onFileSelect={onFileSelect} error={error}/>
                </div>
            );
        }

        if (isLoading) {
            return (
                <div className="loading-div">
                    <CircularProgressIndicator/>
                    <h2 className={'upload-contract-section--title'}>Uploading...</h2>
                </div>
            )
        }

        if (contractSuccessfullyUploaded) {
            return (
                <AdditionalDetailsForm
                    onCancel={onAdditionalDetailsCancel}
                    onSubmit={beginContractReview}
                />
            )
        }

        return <UploadContractSection onFileSelect={onFileSelect} error={error}/>;
    }

    return <div>
        <NavigationBar/>
        {getMainSection()}
        <DisclaimerDialog
            open={disclaimerDialogOpen}
            cancelUpload={() => {
                setDisclaimerDialogOpen(false);
                setIsSplitScreen(false);
            }}
            confirmUpload={() => {
                setDisclaimerDialogOpen(false);
                convertContract(selectedFile);
            }}
        />
    </div>;
}

export default MainPage;