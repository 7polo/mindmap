"use strict";
import MinderEditor from "../src";
// import MinderEditor from "../dist/bundle";

const editor = new MinderEditor("#minder");

editor.import({
    "root": {
        "data": {
            "text": "账号"
        },
        "children": [
            {"data": {"text": "网页"}},
            {"data": {"text": "贴吧"}},
            {"data": {"text": "知道"}},
            {"data": {"text": "音乐"}},
            {"data": {"text": "图片"}},
            {"data": {"text": "视频"}},
            {"data": {"text": "地图"}, "children": [ {"data": {"text": "网页"}}]},
            {"data": {"text": "百科", "expandState": "collapse"}}
        ]
    },
    "template": "default"
})

editor.onEvent('ready', (e)=> {
    console.log('ready')

    console.log(e)
})

editor.onEvent('nodechanged', (e)=> {
    console.log('nodechanged')

    console.log(e)
})

editor.onEvent('afterexeccommand', (e)=> {
    console.log('afterexeccommand')

    console.log(e)
})

editor.onEvent('contentchange', (e)=> {
    console.log('change')
    console.log(e)
})



// editor.setReadOnly(false)
//
// setTimeout(()=> {
//     console.log('恢复读写')
//     editor.setReadOnly(false)
// }, 1000 * 10)