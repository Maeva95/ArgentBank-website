import { createSlice } from "@reduxjs/toolkit"
import { signUp } from "../services/callApi"

// const tokenInStorage = {
//     token: localStorage.getItem('token'),
// }
const state = {
    token: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState: state /* ||tokenInStorage*/,
    reducers: {
        // setUserInfo: (state, action) => {
        //     const currentUser = { ...state.user, ...action.payload };
        //     return currentUser
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state, action) => {
            state = action.payload
            
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            const token = action.payload
            console.log(token)
            return {...state, token: token}
        })
        builder.addCase(signUp.rejected, (state, action) => {
            state.error = action.error;
        })
    }
})
export default authSlice.reducer