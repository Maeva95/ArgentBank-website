import Axios from "axios";

export const POST_USER = 'POST_USER'
export const ADD_USER = 'ADD_USER'

export const postUser = (loginUser) => {
    return (dispatch) => {
        return Axios
            .post('http://localhost:3001/api/v1', loginUser)
            .then((res) => {
                dispatch({ type: POST_USER, payload: loginUser})
            })
    }
}

export const newUser = (user) => {
    return (dispatch) => {
        return Axios
            .post('http://localhost:3001/api/v1', user)
            .then((res) => {
                dispatch({ type: ADD_USER, payload: user})
            })
    }
}