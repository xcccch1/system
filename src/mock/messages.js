import Mock from "mockjs"

const messagesList = Mock.mock({
    "data|6": [{
        "id|+1": 1,
        "name": "@cname"
    }]
})

export function getmessages() {
    return messagesList.data
}