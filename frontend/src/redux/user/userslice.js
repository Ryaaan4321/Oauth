import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false
};

const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers: {
        signinstart: (state) => {
            state.loading = true;
        },
        signinsuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signinfailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { signinstart, signinsuccess, signinfailure } = userSlice.actions;
export default userSlice.reducer;
