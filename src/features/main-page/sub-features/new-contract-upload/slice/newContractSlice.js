import {createSlice} from "@reduxjs/toolkit";
import {newContractUploadStatus} from "./newContractUploadStatus.js";
import {convertNewContract} from "./actions.js";

export const newContractSlice = createSlice({
    name: 'newContract',
    initialState: {
        payload: null,
        error: null,
        status: newContractUploadStatus.WAITING,
    },
    reducers: {
        resetState: (state) => {
            state.payload = null;
            state.error = null;
            state.status = newContractUploadStatus.WAITING;
        },
    },
    extraReducers: getExtraReducers(),
});

function getExtraReducers() {
    return (builder) => {
        builder.addCase(convertNewContract.pending, (state) => {
            updateNewContractState(state, null, newContractUploadStatus.UPLOADING);
        })
            .addCase(convertNewContract.fulfilled, (state, action) => {
                updateNewContractState(state, action.payload, newContractUploadStatus.UPLOADED);
            })
            .addCase(convertNewContract.rejected, (state, action) => {
                updateNewContractState(state, action.payload, newContractUploadStatus.FAILED);
            });
    }
}

function updateNewContractState(state, payload, status) {
    state.status = status;

    switch (status) {
        case newContractUploadStatus.UPLOADING:
            state.error = null;
            break;
        case newContractUploadStatus.UPLOADED:
            state.error = null;
            state.payload = payload;
            break;
        case newContractUploadStatus.FAILED:
            state.error = payload || 'Unable to upload contract';
            break;
        default:
            break;
    }
}

export const { resetState } = newContractSlice.actions;

export default newContractSlice.reducer;