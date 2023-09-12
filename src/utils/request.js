import axios from "axios"

const request = axios.create({
    // baseURL: "proxy",
    baseURL:"http://node.xcccch1.top/api/private/v1/",
    timeout: 20000
})

request.interceptors.request.use(config => {
    const token = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "";
    config.headers.Authorization = token;
    return config;
})

export default request