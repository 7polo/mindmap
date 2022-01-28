import MinderEditor from "../src";

const editor = new MinderEditor("#minder");
editor.importJson({
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
            {"data": {"text": "地图"}},
            {"data": {"text": "百科", "expandState": "collapse"}}
        ]
    },
    "template": "default"
})