import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiInstance} from "../../../../../common/api.js";

/**
 * @typedef {Object} Contract
 * @property {number} id
 * @property {string} original_file_name
 * @property {string} upload_date
 * @property {string} extension
 * // Add other properties of Contract as needed
 */

/**
 * @typedef {Object} ApiResponse
 * @property {Contract[]} contracts
 */

/**
 * Retrieve historic contracts.
 */
export const retrieveHistoricContracts = createAsyncThunk(
    'historicContracts/retrieveHistoricContracts',
    /** @param {any} _ - The first parameter is not used here
     *  @param {Object} thunkAPI
     *  @param {function} thunkAPI.rejectWithValue
     *  @returns {Promise<Contract[]|any>}
     */
    async (_, { rejectWithValue }) => {
        const response = await apiInstance.get(`contracts/all`);
        if (response.status !== 200) {
            return rejectWithValue(response.data.message);
        }

        /** @type {ApiResponse} */
        const data = response.data;

        for (let i = 0; i < data.contracts.length; i++) {
            const original_file_name = data.contracts[i].original_file_name;
            data.contracts[i].extension = original_file_name.substring(original_file_name.lastIndexOf('.') + 1);

            const date = new Date(data.contracts[i].upload_date);

            data.contracts[i].upload_date = new Intl.DateTimeFormat('en-GB', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit'
            }).format(date);
        }

        return data.contracts;
    }
);