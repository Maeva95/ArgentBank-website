import { createSlice } from "@reduxjs/toolkit"
// import { getProfileInfo, changeUserName } from "../services/callApi"
import { argentBankApi } from "../services/api.services"

// const infos = {
//     email:'',
//     firstName: '',
//     lastName: '',
//     userName: '',
//     createdAt: '',
//     updateAt: '',
//     id: ''
// }
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
        builder.addMatcher(
            argentBankApi.endpoints.profile.matchFulfilled,
            (state, {payload}) => {
                state.infos = payload.body
            }
        )
        builder.addMatcher(
            argentBankApi.endpoints.editUsername.matchFulfilled,
            (state, {payload}) => {
                state.infos = payload.body
            }
        )
    }
})

export const {clearState} = userSlice.actions
export default userSlice.reducer