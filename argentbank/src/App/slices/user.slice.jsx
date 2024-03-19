import { createSlice } from "@reduxjs/toolkit"
import { argentBankApi } from "../services/api.services"

const currentState = {
    loading: false,
    infos: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState: currentState,
    reducers: {
        clearState: (state) => {
            state.infos = {}
        }
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(
            argentBankApi.endpoints.profile.matchFulfilled,
            (state, {payload}) => {
                state.infos = payload.body
            }
        )
        .addMatcher(
            argentBankApi.endpoints.editUsername.matchPending,
            (state) => {
                state.loading = true
            }
        )
        .addMatcher(
            argentBankApi.endpoints.editUsername.matchFulfilled,
            (state, {payload}) => {
                state.infos = payload.body
                state.loading = false
            }
        )
    }
})

export const {clearState} = userSlice.actions
export default userSlice.reducer