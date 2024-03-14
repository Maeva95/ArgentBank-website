import { createSlice } from "@reduxjs/toolkit"
import { argentBankApi } from "../services/api.services"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        error: '',
    },
    reducers: {
        logout: (state) => {
            state.token = null
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            argentBankApi.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                state.token = payload.body.token
                localStorage.setItem('token', state.token)
                state.error = ''
            }
        )
        builder.addMatcher(
            argentBankApi.endpoints.login.matchRejected,
            (state, action) => {
                console.log('Error', action.payload.data.message)
                state.error = action.payload.data.message
            }
        )
    }
})

export const {logout} = authSlice.actions
export default authSlice.reducer

