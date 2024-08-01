import {historicContractsStatus} from "./historicContractsStatus.js";
import {createSlice} from "@reduxjs/toolkit";
import {retrieveHistoricContracts} from "./actions.js";


export const historicContractsSlice = createSlice({
    name: 'historicContracts',
    initialState: {
        contracts: [],
        error: null,
        status: historicContractsStatus.LOADING,
    },
    extraReducers: getExtraReducers(),
});


function getExtraReducers() {
    return (builder) => {
        builder
            .addCase(retrieveHistoricContracts.pending, (state) => {
                updateHistoricContractsState(state, null, historicContractsStatus.LOADING);
            })
            .addCase(retrieveHistoricContracts.fulfilled, (state, action) => {
                updateHistoricContractsState(state, action.payload, historicContractsStatus.CONTRACTS_RECEIVED);
            })
            .addCase(retrieveHistoricContracts.rejected, (state, action) => {
                updateHistoricContractsState(state, action.payload, historicContractsStatus.FAILED);
            });
    }
}

function updateHistoricContractsState(state, payload, status) {
    state.status = status;

    switch (status) {
        case historicContractsStatus.LOADING:
            state.error = null;
            break;
        case historicContractsStatus.CONTRACTS_RECEIVED:
            state.error = null;
            state.contracts = payload;
            break;
        case historicContractsStatus.FAILED:
            state.error = payload || 'Unable to fetch contracts';
            break;
    }
}

export default historicContractsSlice.reducer;