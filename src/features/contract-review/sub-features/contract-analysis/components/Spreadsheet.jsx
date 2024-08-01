import '../styles/Spreadsheet.css';
import PropTypes from "prop-types";
import riskGraphData from "../misc/risk_graph_data.js";
import {Dialog, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const SpreadsheetRow = ({color, title, text}) => {
    return (
        <div className="spreadsheet-row">
            <div className="cell color-cell" style={{backgroundColor: color}}></div>
            <div className="cell title-cell">{title}</div>
            <div className="cell text-cell">{text}</div>
        </div>
    );
};

const Spreadsheet = ({data}) => {
    return (
        <div className="spreadsheet">
            {data.map((row, index) => (
                <SpreadsheetRow key={index} {...row} />
            ))}
        </div>
    );
};

const SpreadSheetDialog = ({open, onClose}) => {
    return (
        <Dialog open={open} maxWidth={false} onClose={onClose}>
            <IconButton
                aria-label="close"
                onClick={onClose}
                style={{
                    position: 'absolute',
                    right: 16,
                    top: 16,
                    color: 'red',
                    border: '1px solid red',
                    zIndex: 999,
                    backgroundColor: 'white',
                }}
            >
                <CloseIcon />
            </IconButton>
            <Spreadsheet
                data={
                    riskGraphData
                }
            />
        </Dialog>
    )
}

SpreadSheetDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired, // Add this line
}
SpreadsheetRow.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

Spreadsheet.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
        })
    ),
};


export default SpreadSheetDialog;