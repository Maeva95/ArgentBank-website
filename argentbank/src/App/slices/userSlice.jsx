import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (currentState, action) => {
            const loginUser = [...currentState, action.payload]
            return loginUser
        }
        
    }
})