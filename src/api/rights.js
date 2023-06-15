import request from "@/utils/request";

export const getRightListAPI = (type="list") => {
    return request({
        url: `rights/${type}`
    })
}