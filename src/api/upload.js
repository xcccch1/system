import request from "@/utils/request";

export const postfile = file =>{
    return request({
        method:"post",
        url:"upload",
        data:{
            file
        }
    })
}