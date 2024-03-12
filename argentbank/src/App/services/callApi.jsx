import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const BASE_URL = 'http://localhost:3001/api/v1/user/'

export const signUp = createAsyncThunk(
    'auth',
    async (userLog) => {
        const res = await Axios.post(BASE_URL + 'login', (userLog))
        const token = res.data.body.token
        console.log('Token:' + token)
        localStorage.setItem('token', JSON.stringify(token))
        return token
    }
)

export const getProfileInfo = createAsyncThunk(
    'profile',
    async (token) => {
        try {
            const res = await Axios.post(BASE_URL + 'profile', {}, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        })
            const result = res.data.body
            console.log(result)
            localStorage.setItem('userInfos', JSON.stringify(result))
            return result    
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        }
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