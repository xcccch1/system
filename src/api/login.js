import request from "@/utils/request";

export const loginAPI = (obj) => {
    return request({
        method:"post",
        url: "/login",
        data:{
            username:obj.username,
            password:obj.password
        }
    })
}