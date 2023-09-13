import request from "@/utils/request";

export const getGoodsAPI = (data)=>{
    return request({
        url:`/goods?query=${data.query}&pagenum=${data.pagenum}&pagesize=${data.pagesize}`
    })
}

export const getTabListAPI = ()=>{
    return request({
        url:'/getTabList'
    })
}

export const getEchartOptionAPI = ()=>{
    return request({
        url:"/getEchartOption"
    })
}