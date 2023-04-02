import request from "@/utils/request";

export const getMenuAPI = () => {
    return request({
        url: "/getMenuList"
    })
}