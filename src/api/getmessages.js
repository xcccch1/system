import request from "@/utils/request";

export const getmessagesAPI = () => {
    return request({
        url: "/getmessages"
    })
}