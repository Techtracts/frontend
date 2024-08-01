import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../../common/api";

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({email, password}, { rejectWithValue }) => {
        try {
            const response = await apiInstance.post(
                `/auth/register`,
                {email, password},
            );
            if (response.status !== 200) {
                return rejectWithValue(response.data.message);
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password}, { rejectWithValue }) => {
        try {
            const formData = new URLSearchParams();
            formData.append('username', email);
            formData.append('password', password);

            console.log('called login ');
            const response = await apiInstance.post(
                `/auth/login`,
                formData,
                {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                }
            );
            if (response.status !== 200) {
                return rejectWithValue(response.data.message);
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);