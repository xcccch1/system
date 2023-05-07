import request from "@/utils/request";

export const getRolesListAPI = () => {
    return request({
        url: "/roles"
    })
}