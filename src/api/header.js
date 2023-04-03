import request from "@/utils/request";

export const getHeaderMenuAPI = () => {
    return request({
        url: "/getHeaderMenuList"
    })
}