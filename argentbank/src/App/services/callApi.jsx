import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
// import { configAxios } from "./config.axios";

const BASE_URL = 'http://localhost:3001/api/v1/user/'

export const signUp = createAsyncThunk(
    'auth',
    async (userLog) => {
        const res = await Axios.post(BASE_URL +'login' , (userLog))
        const token = res.data.body.token
        localStorage.setItem('token', JSON.stringify(token))
        return await token    
    }
)

// récupérer les infos user
export const getProfileInfo = createAsyncThunk(
    'user/getInfos',
    async (tokenBearer) => {
        try {
            const res = await Axios.post(BASE_URL +'profile', {}, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${tokenBearer}` 
                }
            })
            const result = res.data.body
            console.log(result)
            localStorage.setItem('userInfos', JSON.stringify(result))
            return result 
        } catch (error) {
            if (error.response) {
                console.log(error.response);
            } else if (error.request) {
                console.log('erreur réseau');
            } else {
                console.log(error + `Oups, une erreur s'est produite`);
            }
        }
    }
)

// modifier username
export const changeUserName = createAsyncThunk(
    'user/update',
    async (token, userName) => {
        try {
            const res = await Axios.put(BASE_URL + 'profile', {userName}, {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(userName)
            })
            const result = res.data.body
            console.log(result)
            return await result    
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.headers)
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        }
    }
)