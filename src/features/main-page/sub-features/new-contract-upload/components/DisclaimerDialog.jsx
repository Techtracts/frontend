import {Dialog} from "@mui/material";
import PropTypes from "prop-types";
import '../styles/DisclaimerDialog.css'
import exclamation from '../../../../../assets/exclamation.png'

function DisclaimerDialog({confirmUpload, cancelUpload, open}) {

    return (
        <Dialog open={open}>
            <div className={'dialog'}>
                <img className={'dialog--top-icon'} src={exclamation} alt={'exclamation'}/>
                <p className={'dialog--text'}>
                    Please ensure all sensitive and confidential information is erased from the document prior to using
                    our service.
                    For further information, read our {<span className={'hyperlink-text'} style={{fontWeight: '500'}}>privacy policy</span>}
                </p>
                <div className={'dialog--button-div'}>
                    <button className={'cancel-button'} onClick={cancelUpload}>Cancel</button>
                    <div style={{width: '10px'}}/>
                    <button onClick={confirmUpload}>Upload</button>
                </div>
            </div>
        </Dialog>
    );
}

DisclaimerDialog.propTypes = {
    confirmUpload: PropTypes.func.isRequired,
    cancelUpload: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
}

export default DisclaimerDialog;