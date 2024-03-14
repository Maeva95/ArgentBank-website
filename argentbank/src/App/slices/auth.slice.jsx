import { createSlice } from "@reduxjs/toolkit"
// import { signUp } from "../services/callApi"
import { argentBankApi } from "../services/api.services"

// const tokenInStorage = localStorage.getItem('token')

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            argentBankApi.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                state.token = payload.body.token
                localStorage.setItem('token', state.token)
            }
        )
        // builder
        // .addCase(signUp.fulfilled, (state, action) => {
        //     const token = action.payload
        //     return {...state, token: token}
        // })
        // .addCase(signUp.rejected, (state, action) => {
        //     state.error = action.error;
        // })
    }
})
export default authSlice.reducer

