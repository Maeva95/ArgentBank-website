import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "./slices/auth.slice"

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
    },
    devTools: true,
})

