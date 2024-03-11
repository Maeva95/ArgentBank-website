import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const BASE_URL = 'http://localhost:3001/api/v1/user/'

export const signUp = createAsyncThunk(
    'auth',
    async (userLog) => {
        const res = await Axios.post(BASE_URL + 'login', (userLog))
        const token = res.data.body.token
        localStorage.setItem('token', JSON.stringify(token))
        return token
    }
)

export const getProfileInfo = createAsyncThunk(
    'profile',
    async (token) => {
        const res = await Axios.post(BASE_URL + 'profile', {
            headers: {
                Authorization: `${token}`
            }
        })
        const result = res.data.body
        console.log(res.data)
        console.log(res.status)
        console.log(res.headers)
        return result
    }
)

// // récupérer les infos user , modifier username
// export const fetchUserById = createAsyncThunk(
//     'profile',
//     async () => {
//         const res = await useApi.profile
//         const userById = res.data.body.id
//         return userById
//     }
// )