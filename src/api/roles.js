import request from "@/utils/request";

// 获取角色列表
export const getRolesListAPI = () => {
    return request({
        url: "/roles"
    })
}

// 添加角色
export const addRoleAPI = (data) => {
    return request({
        method: "post",
        url: "/roles",
        data
    })
}

// 删除角色
export const removeroleAPI = (id) => {
    return request({
        method: "delete",
        url: "roles/" + id
    })
}

//查询角色
export const searchroleAPI = (id) => {
    return request({
        url: "roles/" + id
    })
}

// 修改角色
export const changeroleAPI = (id, data) => {
    return request({
        method: "put",
        url: "roles/" + id,
        data
    })
}