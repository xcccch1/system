import request from "@/utils/request";

// 获取用户列表
export const getUserInfoAPI = params => {
    return request({
        url: "/users",
        params
    })
}

// 添加用户
export const addUserAPI = data => {
    return request({
        method: "post",
        url: "/users",
        data
    })
}

//删除用户 
export const removeUserAPI = id => {
    return request({
        method: "delete",
        url: "/users/" + id
    })
}

// 根据id查询用户信息
export const searchuserAPI = id => {
    return request({
        url: "/users/" + id
    })
}

// 修改用户信息
export const changeUserAPI = (id, data) => {
    return request({
        method: "put",
        url: "/users/" + id,
        data
    })
}