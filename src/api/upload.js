import request from "@/utils/request";

export const postfile = filename =>{
    return request({
        method:"post",
        url:"upload",
        data:filename
    })
}