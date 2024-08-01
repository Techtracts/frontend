import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../../../common/api.js";
import {setSelectedHighRiskClause} from "./contractAnalysisSlice.js";
import {abortPreviousRequest, setAbortController} from "./risky_clause_abort_controller.js";


export const getExplanationOfHighRiskClause = createAsyncThunk(
    'contractAnalysis/getHighRiskClauseExplanation',
    async (explanationRequest, {dispatch, rejectWithValue}) => {
        // Use the provided function to abort the previous request
        abortPreviousRequest();

        // Create a new AbortController for the new request
        const newAbortController = new AbortController();
        setAbortController(newAbortController);

        try {
            dispatch(setSelectedHighRiskClause(explanationRequest.risky_clause.clause_id))
            const response = await fetch(`${BASE_URL}/contracts/explain-risky-clause`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(explanationRequest),
                signal: newAbortController.signal,
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let text = '';

            reader.read().then(function processText({done, value}) {
                if (done) {
                    return;
                }

                const chunk = decoder.decode(value, {stream: true});
                const newline = '\n';
                const regex = new RegExp(newline, 'g');
                const strippedChunk = chunk.replace(regex, '');
                text += strippedChunk;
                dispatch(updateHighRiskClauseExplanation(text));

                // Read the next chunk
                reader.read().then(processText);
            });

            if (response.status !== 200) {
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                return rejectWithValue(error.message);
            }
        }
        finally {
            abortController = null;
        }
    }
);

export const updateHighRiskClauseExplanation = createAsyncThunk(
    'contractAnalysis/updateHighRiskClauseExplanation',
    async (explanation, {rejectWithValue}) => {
        try {
            return explanation;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
