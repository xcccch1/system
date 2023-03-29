import axios from "axios"

const request = axios.create({
    baseURL: "http://127.0.0.1:8888/api/private/v1/",
    timeout: 20000
})

// request.interceptors.request.use(config =>{
//     config.headers["Content-Type"] = "application/json;charset=utf-8"
//     const token = localStorage.getItem("token")?localStorage.getItem("token") :"";
//     config.headers.Authorization = token;
//     console.log(config);
//     return config;
// })

export default request