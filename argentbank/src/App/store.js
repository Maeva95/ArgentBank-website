import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from "./slices/auth.slice"
import userSliceReducer from "./slices/user.slice"
import { argentBankApi } from "./services/api.services"
export * from './slices/auth.slice'
export * from './slices/user.slice'

export const store = configureStore({
    reducer: {
        [argentBankApi.reducerPath]: argentBankApi.reducer,
        auth: authSliceReducer,
        user: userSliceReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(argentBankApi.middleware),
    devTools: true
})

