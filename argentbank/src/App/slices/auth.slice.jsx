import { createSlice } from "@reduxjs/toolkit"
import { getProfileInfo, signUp } from "../services/callApi"

const state = {
    token: null,
    user: {
        id: null,
        firstName:'',
        lastName: '',
        email: '',
        password: '',
        userName: ''
    }
}
const authSlice = createSlice({
    name: 'auth',
    initialState: state || localStorage.setItem('token'),
    reducers: {
        setUserInfo: (state, action) => {
            const currentUser = { ...state.user, ...action.payload };
            return currentUser
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state, action) => {
            state = action.payload
        })
        builder.addCase(signUp.fulfilled, (state, action) => {
            state = Object.assign({}, state, ...action.payload)
            state = action.payload
        })
        builder.addCase(signUp.rejected, (state, action) => {
            state.error = action.error;
        })
        builder.addCase(getProfileInfo.fulfilled, (state, action) => {
            const user = action.payload
            state.user = Object.assign({}, state.user, ...user)
        })
    }
})
export const { setUserInfo } = authSlice.actions
export default authSlice.reducer