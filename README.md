# qr-plug
谷歌插件练习
防Quick QR二维码生成器谷歌插件
直接下载项目到本地
在谷歌-->扩展程序-->选择加载已解压的扩展程序-->选择项目-->点击确定
这是插件列表中就有刚才添加的了，点击启动
Duang~
就出现在浏览器插件栏了

开发说明：
每个应用（扩展）都应该包含下面的文件：
一个manifest文件
一个或多个html文件（除非这个应用是一个皮肤）
可选的一个或多个javascript文件
可选的任何需要的其他文件，例如图片
manifest.json
{
"name": "My Extension",
"version": "2.1",
"description": "Gets information from Google.",
"icons": { "128": "icon_128.png" }, //显示图标大小：地址
"background_page": "bg.html",  //背景页面
"permissions": ["http://*.google.com/", "https://*.google.com/"],
"browser_action": {
"default_title": "",
"default_icon": "icon_19.png",
"default_popup": "popup.html" //弹框页面
}
}


