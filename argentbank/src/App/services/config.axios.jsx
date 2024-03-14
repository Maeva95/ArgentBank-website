import Axios from "axios";

const BASE_URL = 'http://localhost:3001/api/v1/user/'
export const configAxios = Axios.create({
    baseURL: BASE_URL
})

configAxios.interceptors.request.use(request => {
    const tokenStorage = localStorage.getItem('token')
    if(tokenStorage) {
        request.headers.Accept = 'application/json'
        request.headers.Authorization = `Bearer ${tokenStorage}`
    }
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
})

configAxios.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
})
