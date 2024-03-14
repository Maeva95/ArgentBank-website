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
        logout: (state) => {
            state.infos = {}
            localStorage.clear()
        },
        getInfos: (state, action) => {
            state = {...state}
        },
        cancelEdit: (state, action) => {
            state = {...state}
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            argentBankApi.endpoints.profile.matchFulfilled,
            (state, {payload}) => {
                state.infos = payload.body
            }
        )
        // builder
        // .addCase(getProfileInfo.pending, (state, action) => {
        //     state.loading = true
        // })
        // .addCase(getProfileInfo.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.infos = action.payload
        // })
        // .addCase(getProfileInfo.rejected, (state, action) => {
        //     state.error = action.error
        // })
        // modification username

        // .addCase(changeUserName.fulfilled, (state, {payload}) => {
        //     state.infos = {...state, payload}
        // })
        // .addCase(changeUserName.rejected, (state, action) => {
        //     state.error = action.error
        // })
    }
})
export const {logout, getInfos, cancelEdit}  = userSlice.actions
export default userSlice.reducer