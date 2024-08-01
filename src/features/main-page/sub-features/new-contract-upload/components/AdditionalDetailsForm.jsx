import '../styles/AdditionalDetailsForm.css'
import NewContractIconTitle from "../../../components/NewContractIconTitle.jsx";
import infoIcon from "../../../../../assets/info.png";
import {useState} from "react";
import PropTypes from "prop-types";

function AdditionalDetailsForm({onCancel, onSubmit}) {
    let [formData, setFormData] = useState({
        contractType: '',
        contractParty: '',
        jurisdiction: '',
        industry: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
            ...(name === 'contractType' && { contractParty: '' }) // Reset contractParty when contractType changes
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.contractType || !formData.contractParty || !formData.jurisdiction || !formData.industry) {
            alert('Please fill out all fields');
            return;
        }
        onSubmit(formData);
    }

    function getContractPartyOptions() {
        switch (formData.contractType) {
            case 'employment':
                return (
                    <>
                        <option value="employer">Employer</option>
                        <option value="employee">Employee</option>
                    </>
                );
            case 'commercial':
                return (
                    <>
                        <option value="provider">Provider</option>
                        <option value="client">Client</option>
                    </>
                );
            case 'services':
                return (
                    <>
                        <option value="supplier">Supplier</option>
                        <option value="customer">Customer</option>
                    </>
                );
            default:
                return null;
        }
    }


    return (
        <div className={'additional-details-form'}>
            <NewContractIconTitle/>
            <img className={'additional-details-form--info-icon'} src={infoIcon} alt={'info'}/>
            <form className={'additional-details-form--form'}>
                <div className={'additional-details-form--form--input-container'}>
                    <div className={'form-group'}>
                        <label htmlFor='contractType'>Contract Type</label>
                        <select id="contractType" name="contractType" onChange={handleChange} value={formData.contractType}>
                            <option value="" disabled>Select an option</option>
                            <option value="employment">Employment Contract</option>
                            <option value="services">Services Contract</option>
                            <option value="commercial">Commercial Contract</option>
                        </select>
                    </div>
                    {formData.contractType && (
                        <div className={'form-group'}>
                            <label htmlFor="contractParty">Contract Party</label>
                            <select id="contractParty" name="contractParty" onChange={handleChange} value={formData.contractParty}>
                                <option value="" disabled>Select an option</option>
                                {getContractPartyOptions()}
                            </select>
                        </div>
                    )}
                    <div className={'form-group'}>
                        <label htmlFor='jurisdiction'>Jurisdiction</label>
                        <select id="jurisdiction" name="jurisdiction" onChange={handleChange}>
                            <option value="" disabled selected>Select an option</option>
                            <option value="uk">UK</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor='industry'>Industry</label>
                        <select id="industry" name="industry" onChange={handleChange}>
                            <option value="" disabled selected>Select an option</option>
                            <option value="legal">Legal</option>
                            <option value="technology">Technology</option>
                            <option value="finance">Finance</option>
                            <option value="commercial">Commercial</option>
                        </select>
                    </div>
                    <div style={{height: '20px'}}/>
                    <div className={'additional-details-form--button-container'}>
                        <button className={'submit-btn'} onClick={handleSubmit}>Submit</button>
                        <button className={'cancel-button'} onClick={onCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

AdditionalDetailsForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default AdditionalDetailsForm;