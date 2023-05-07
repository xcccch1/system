import request from "@/utils/request";

export const getRightListAPI = () => {
    return request({
        url: "rights/list"
    })
}