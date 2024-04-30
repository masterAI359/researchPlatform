import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosClient.interceptors.request.use((config)=> {
    const token = localStorage.getItem('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((response)=> {
    console.log('successful axios response')
    const {data} = response
    return data
}, (error)=> {
    const {response} = error;
    if(response.status === 401){
        localStorage.removeItem('ACCESS_TOKEN')
        throw error
    } else if(response.status === 422){
        console.log('invalid credentials')
        throw error.response
    } else {
        throw error;
    }

})

export default axiosClient;
