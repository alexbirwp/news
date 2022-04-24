import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user', 
    initialState: {
        login: null,
        role: null,
    },
    reducers: {
        logIn: (state, action) => {
            const {login, role} = action.payload;
            state.login = login;
            state.role = role;
            state.logInError = null;
        },
        logOut: (state) => {
            state.login = null;
            state.role = null;
        }
    }
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;