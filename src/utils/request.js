import axios from "axios"

const request = axios.create({
    baseURL: "proxy",
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