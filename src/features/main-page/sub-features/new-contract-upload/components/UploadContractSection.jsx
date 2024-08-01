import {useRef, useState} from "react";
import '../styles/UploadContractSection.css'
import pdfIcon from '../../../../../assets/pdf.png'
import docxIcon from '../../../../../assets/docx.png'
import CTAButton from "../../../../../common/components/CTAButton.jsx";
import ErrorContainer from "../../../../../common/components/ErrorContainer.jsx";
import PropTypes from "prop-types";
import NewContractIconTitle from "../../../components/NewContractIconTitle.jsx";

function UploadContractSection({ onFileSelect, error}) {
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef(null);

    const handleDrag = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.type === "dragenter" || event.type === "dragover") {
            setDragActive(true);
        } else if (event.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            onFileSelect(files[0]);
        }
    };

    return (
        <div className="upload-contract-section"
             onDragEnter={handleDrag}
             onDragOver={handleDrag}
             onDragLeave={handleDrag}
             onDrop={handleDrop}>
            <NewContractIconTitle />
            <div style={{height: '60px'}}/>
            <h2 className={'upload-contract-section--title'}>Drop your contract here</h2>
            <div className={"supported-docs-container"}>
                <img src={pdfIcon} alt="pdf" className={"supported-docs-container--icon"}/>
                <img src={docxIcon} alt="docx" className={"supported-docs-container--icon"}/>
            </div>
            <h2 className={'upload-contract-section--title'}>Or</h2>
            {error &&
                <div style={{margin: '10px'}}>
                    <ErrorContainer msg={error}/>
                </div>
            }
            <CTAButton text={"Upload"} onTap={() => fileInputRef.current.click()}/>
            <input
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(event) => onFileSelect(event.target.files[0])}
            />
            {dragActive && (
                <div className="drag-active-overlay">
                    <p>Drop the files here...</p>
                </div>
            )}

        </div>
    )
}

UploadContractSection.propTypes = {
    onFileSelect: PropTypes.func.isRequired,
    error: PropTypes.string,
};

export default UploadContractSection;