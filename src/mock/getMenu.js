const messagesList = {
    data: [
        { id: 1, path: '@assets/icon/header1.png', text: '消息' },
        { id: 2, path: '@assets/icon/header2.png', text: '日历' },
        { id: 3, path: '@assets/icon/header3.png', text: '云文档' },
        { id: 4, path: '@assets/icon/header4.png', text: '知识库' },
        { id: 5, path: '@assets/icon/header5.png', text: '邮箱' },
        { id: 6, path: '@assets/icon/header6.png', text: '问卷' }
    ]
}

export function getMenu() {
    return messagesList.data
}