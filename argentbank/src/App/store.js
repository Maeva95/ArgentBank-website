import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "./slices/auth.slice"
import userSliceReducer from "./slices/userSlice"

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        profile: userSliceReducer
    },
    devTools: true,
})

