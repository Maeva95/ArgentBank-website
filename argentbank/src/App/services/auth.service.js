import axios from "axios";
import { loginUser } from "../slices/authSlice";


const API_URL = 'http://localhost:3001/api/v1/user/';

// accès à l'API Login (connexion au compte user et récupération du tokenBearer)
export const signUp = (userLog) => async (dispatch) => {
    try {
        const res = await axios.post(API_URL + 'login', userLog)
        const getToken = res.data.body.token
        dispatch(loginUser(getToken))
        if (getToken) {
            localStorage.setItem('token', JSON.stringify(getToken))
        }
    } catch (error) {
        console.error(`Une erreur est survenue: ${error.message}`)
        
    }
}

// accès à l'API User Profile (création de compte et modification username)
// export const registerUser = (tokenBearer) => async (dispatch) => {
//     try {
//         const headers = {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${tokenBearer}`
//         }
//         const res = await axios.post(API_URL + 'profile', {
//             headers: headers
//         })
//         const data = await res.json()
//         const userInfo = JSON.parse(data)
//         console.log(userInfo)
//         dispatch(getInfoUser(userInfo))
//         dispatch(setUsername(data.body.username))
// } catch (err) {
//         console.error(err)
//     }
// }

// accès à l'API User Profile (pour modifer le nom de profil de l'utilisateur )
// export const editUsername = (tokenBearer) => async (dispatch) => {
//     try {
//         const headers = {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${tokenBearer}`
//         }
//         const res = await axios.put(API_URL + 'profile', {
//             headers: headers,
//             body: JSON.stringify({username: setUsername})
//         })
//         const data = await res.json()
//         dispatch(setUsername(data.body.username))
//     } catch (error) {
        
//     }
// }
