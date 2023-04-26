import Mock from "mockjs";
// const Mock = require("mockjs")

const tablist = [
    Mock.mock({
        title:"Message",
        "number|10000-20000": 100,
        icon:"#icon-xinxi"
    }),
    Mock.mock({
        title:"Purchases",
        "number|10000-20000": 100,
        icon:"#icon-jifen"
    }),
    Mock.mock({
        title:"Interest",
        "number|10000-20000": 100,
        icon:"#icon-guanzhu"
    }),
    Mock.mock({
        title:"More",
        number:null,
        icon:"#icon-gengduo"
    })
]

export default function getTabList(){
    return tablist
}