import { createSlice } from "@reduxjs/toolkit";
import { authStatus } from "./authStatus.js";
import { registerUser, loginUser } from "./actions.js";

export const TOKEN_STORAGE_KEY = 'juris-ai-auth-token';

const initialState = {
    token: JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY)) || {
        access_token: '',
        token_type: '',
    },
    error: null,
    status: authStatus.IDLE,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: getExtraReducers(),
});

function getExtraReducers() {
    return (builder) => {
        // Register
        builder
            .addCase(registerUser.pending, (state) => {
                updateAuthState(state, null, authStatus.LOADING);
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                saveTokenToLocalStorage(action.payload);
                updateAuthState(state, action.payload, authStatus.SUCCEEDED);
            })
            .addCase(registerUser.rejected, (state, action) => {
                updateAuthState(state, action.payload, authStatus.FAILED);
            });

        // Login
        builder
            .addCase(loginUser.pending, (state) => {
                updateAuthState(state, null, authStatus.LOADING);
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                saveTokenToLocalStorage(action.payload);
                updateAuthState(state, action.payload, authStatus.SUCCEEDED);
            })
            .addCase(loginUser.rejected, (state, action) => {
                updateAuthState(state, action.payload, authStatus.FAILED);
            });
    };
}

const updateAuthState = (state, payload, status) => {
    state.status = status;

    switch (status) {
        case authStatus.LOADING:
            state.error = null;
            break;
        case authStatus.SUCCEEDED:
            state.error = null;
            state.token = payload;
            break;
        case authStatus.FAILED:
            state.error = payload || 'Unable to auth user';
            break;
    }
}

const saveTokenToLocalStorage = (token) => {
    console.log('saving token to local storage');
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
    console.log('token saved to local storage');
}

export default authSlice.reducer;