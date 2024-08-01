import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../../../common/api.js";
import {setExplanationClauseLocation, setExplanationIsUpdating} from "./contractAnalysisSlice.js";

export const getExplanation = createAsyncThunk(
    'contractAnalysis/getExplanation',
    async (explanationRequest, {dispatch, rejectWithValue}) => {

        dispatch(setExplanationIsUpdating(true));

        try {
            const response = await fetch(`${BASE_URL}/contracts/explain-clause`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(explanationRequest),
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let text = '';

            reader.read().then(function processText({done, value}) {
                if (done) {
                    dispatch(setExplanationIsUpdating(false));
                    return;
                }

                const chunk = decoder.decode(value, {stream: true});
                const newline = '\n';
                const regex = new RegExp(newline, 'g');
                const strippedChunk = chunk.replace(regex, '');
                text += strippedChunk;
                dispatch(updateExplanation(text));

                // Read the next chunk
                reader.read().then(processText);
            });

            if (response.status !== 200) {
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            dispatch(setExplanationClauseLocation(null))
            dispatch(setExplanationIsUpdating(false));
            return rejectWithValue(error.message);
        }
    }
);

export const updateExplanation = createAsyncThunk(
    'contractAnalysis/updateExplanation',
    async (explanation, {rejectWithValue}) => {
        try {
            return explanation;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
