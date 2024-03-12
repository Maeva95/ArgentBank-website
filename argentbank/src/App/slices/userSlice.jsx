import { createSlice } from "@reduxjs/toolkit"
import { getProfileInfo } from "../services/callApi"

const currentState = {}
const userSlice = createSlice({
    name: 'user',
    initialState: currentState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfileInfo.fulfilled, (state, action) => {
            const userInfos = action.payload
            return userInfos
        })
    }
})
export default userSlice.reducer