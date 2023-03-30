const http = require("axios");

// 调用openai接口获取回答
function getReply(text) {
    return new Promise((resolve, reject) => {
        http.post("https://agent-openai.ccrui.dev/v1/completions", {
            "model": "text-davinci-003", // 机器人模型，不同型号有不同功能
            "prompt": text, // 问题
            "max_tokens": 2048 // 最大字符为2048个
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "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" // 密钥
            }
        }).then(res => {
			const reply = res.data.choices[0].text.replace(/^\n.*/g, '')
            console.log(`Q:${text}\nA:${reply}`)
            resolve(reply)
        }).catch(err => {
            console.error(err)
            resolve('提问出现了点问题，请重新问一遍吧！')
        })
    })
}

module.exports = {
    getReply
}