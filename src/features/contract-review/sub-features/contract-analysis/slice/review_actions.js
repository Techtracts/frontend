import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiInstance} from "../../../../../common/api.js";
import {setContractDetails, setContractId} from "./contractAnalysisSlice.js";

export const reviewContract = createAsyncThunk(
    'contractAnalysis/review',
    async (reviewRequest, {dispatch, rejectWithValue}) => {
        try {
            dispatch(setContractId(reviewRequest.contract_id));
            dispatch(setContractDetails(reviewRequest.contract_details));

            const response = await apiInstance.post(`contracts/review`,
                reviewRequest
            );
            if (response.status !== 200) {
                return rejectWithValue(response.data);
            }

            return {
                contract_id: reviewRequest.contract_id,
                contract_details: reviewRequest.contract_details,
                ...response.data
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)