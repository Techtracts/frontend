import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiInstance} from "../../../../../common/api.js";

export const convertNewContract = createAsyncThunk(
    'newContract/convertNewContract',
    async (file, { rejectWithValue }) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await apiInstance.post(`contracts/convert`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }

        return response.data;
    }
)
