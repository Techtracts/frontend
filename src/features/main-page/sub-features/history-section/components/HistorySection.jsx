import '../styles/HistorySection.css';
import docSvg from "../../../../../assets/svgs/doc.svg";
import IconTitle from "../../../../../common/components/IconTitle.jsx";
import {useDispatch, useSelector} from "react-redux";
import {historicContractsStatus} from "../slice/historicContractsStatus.js";
import {useEffect} from "react";
import {retrieveHistoricContracts} from "../slice/actions.js";
import CircularProgressIndicator from "../../../../../common/components/CircularProgressIndicator.jsx";
import ErrorContainer from "../../../../../common/components/ErrorContainer.jsx";
import HistoricContractList from "./HistoricContractList.jsx";

function HistorySection() {
    const historicContractsState = useSelector((state) => state.historicContracts)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Use effect called')
        dispatch(retrieveHistoricContracts());
    }, [dispatch]);


    const {contracts, status, error} = historicContractsState;
    const isLoading = status === historicContractsStatus.LOADING;
    const errorExists = status === historicContractsStatus.FAILED && error !== null;

    return (
        <div className="history-section">
            <IconTitle title={'History'} src={docSvg}/>
            <div style={{height: '20px'}}/>
            {isLoading && <CircularProgressIndicator />}
            {errorExists && <ErrorContainer msg={error}/>}
            <HistoricContractList contracts={contracts} />
        </div>
    )
}

export default HistorySection;