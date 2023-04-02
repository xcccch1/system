import Mock from "mockjs"

const messagesList = Mock.mock({
        "data|6": [{
            "id|+1": 1,
            "text": "@cname",
            "id|+1": "@/assets/icon/header" + 1 + ".png"
        }]
    })
    // const messagesList = {
    //     data: [
    //         { id: 1, path: '@assets/icon/header1.png', text: '沈明' },
    //         { id: 2, path: '@assets/icon/header2.png', text: '高杰' },
    //         { id: 3, path: '@assets/icon/header3.png', text: '石敏' },
    //         { id: 4, path: '@assets/icon/header4.png', text: '陆娟' },
    //         { id: 5, path: '@assets/icon/header5.png', text: '贺强' },
    //         { id: 6, path: '@assets/icon/header6.png', text: '傅艳' }
    //     ]
    // }

export function getmessages() {
    return messagesList.data
}