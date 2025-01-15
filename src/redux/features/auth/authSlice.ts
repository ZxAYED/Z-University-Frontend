import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


interface IAuthState {
    user: null | object,
    token: null | string
}
const initialState: IAuthState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
        },
        logout: (state) => {
            state.user = null
            state.token = null
        }
    }
})
export const { setUser, logout } = authSlice.actions
export const userCurrentToken = (state: RootState) => state.auth.token
export const userCurrentUser = (state: RootState) => state.auth.user
export default authSlice.reducer