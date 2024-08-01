import PropTypes from "prop-types";
import pdfImg from "../../../../../assets/pdf.png";
import docxImg from "../../../../../assets/docx.png";
import '../styles/HistoryContractList.css'

function HistoricContractList({contracts}) {
    return (
        <ul className={'historic-contract-list'}>
            {contracts.map(contract => <HistoricContractTile key={contract.id} contract={contract}/>)}
        </ul>
    )
}

function HistoricContractTile({contract}) {
    const getImageForExtension = (extension) => {
        switch (extension) {
            case 'pdf':
                return pdfImg;
            case 'docx':
                return docxImg;
            default:
                return null;
        }
    };

    const imageSrc = getImageForExtension(contract.extension);

    return (
        <div className="historic-contract-tile">
            {imageSrc && <img src={imageSrc} alt={contract.original_file_name} className="contract-image"/>}
            <div className="contract-info">
                <h3 className="contract-title">{contract.original_file_name}</h3>
                <p className="contract-date">Uploaded: &nbsp; {contract.upload_date}</p>
            </div>
        </div>
    );
}

const contractShape = PropTypes.shape(
    {
        id: PropTypes.string.isRequired,
        original_file_name: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
        upload_date: PropTypes.string.isRequired
    }
)

HistoricContractList.propTypes = {
    contracts: PropTypes.arrayOf(contractShape)
}

HistoricContractTile.propTypes = {
    contract: contractShape
}

export default HistoricContractList

