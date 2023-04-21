import Mock from "mockjs"

const messagesList = Mock.mock({
        "data|6": [{
            "id|+1": 1,
            "text": "@cname",
            "id|+1": "@/assets/icon/header" + 1 + ".png",
        }]
    })

export function getmessages() {
    return messagesList.data
}