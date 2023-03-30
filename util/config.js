var env = 1 // 0正式环境 1测试环境
var config = {}
if (env === 0) {
    // 正式环境
    config = {
        'appID': 'wx72b6d82c4e70440a',
        'appsecret': 'e9e5f77f51b6f9a07c1d660c739bb57b',
        'token': 'chatgpt'
    }
} else {
    // 测试环境
    config = {
        'appID': 'wx72b6d82c4e70440a',
        'appsecret': 'e9e5f77f51b6f9a07c1d660c739bb57b',
        'token': 'chatgpt'
    }
}

module.exports = config