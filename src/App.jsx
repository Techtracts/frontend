import {Route, Routes, HashRouter} from 'react-router-dom';
import './App.css';
import AuthPage from "./features/auth/AuthPage.jsx";
import MainPage from "./features/main-page/MainPage.jsx";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import AuthReducer from "./features/auth/slice/authSlice.js";
import HistoricContractsReducer from './features/main-page/sub-features/history-section/slice/historicContractsSlice.js'
import NewContractReducer from './features/main-page/sub-features/new-contract-upload/slice/newContractSlice.js'
import ContractAnalysisReducer from './features/contract-review/sub-features/contract-analysis/slice/contractAnalysisSlice.js'
import AuthProtectedRoute from "./common/AuthProtectedRoute.jsx";
import ContractReviewPage from "./features/contract-review/ContractReviewPage.jsx";

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        historicContracts: HistoricContractsReducer,
        newContract: NewContractReducer,
        contractAnalysis: ContractAnalysisReducer,
    },
});

function App() {
    function getRoutes() {
        return <>
            <Route path="/" element={
                <AuthProtectedRoute>
                    <MainPage/>
                </AuthProtectedRoute>
            }/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/contract-review" element={
                <AuthProtectedRoute>
                    <ContractReviewPage/>
                </AuthProtectedRoute>
            }/>
        </>;
    }

    return (
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    {getRoutes()}
                </Routes>
            </HashRouter>
        </Provider>
    );
}

export default App;