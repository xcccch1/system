const messagesList = {
    data: [
        { id: 1, path: require('../assets/icon/header1.png'), text: '消息' },
        { id: 2, path: require('../assets/icon/header2.png'), text: '日历' },
        { id: 3, path: require('../assets/icon/header3.png'), text: '云文档' },
        { id: 4, path: require('../assets/icon/header4.png'), text: '知识库' },
        { id: 5, path: require('../assets/icon/header5.png'), text: '邮箱' },
        { id: 6, path: require('../assets/icon/header6.png'), text: '问卷' }
    ]
}

export function getMenu() {
    return messagesList.data
}