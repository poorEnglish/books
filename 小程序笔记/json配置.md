
#### app.json
> 当前小程序的全局配置，包含页面路径、界面表现、网络超时时间等
##### 字段列表

| 属性     | 类型   | 必填    | 描述 |
|---------|--------|--------|----  |
| pages     | Array[String] |true   |页面路径|
| window    |Object         |false  |默认页面窗口表现|
|tabBar     |Object         |false  |底部tab表现|
|networkTimeout|Object      |false  |网络超时时间|     
|debug      |Boolean        |false  |是否开启debug|
- pages：
描述页面路径的字符串数组，其中第一项是初始页面，增减页面都需要修改此属性（不用写后缀，框架会自行整合）
- window：
用于设置小程序状态栏、导航条、标题和窗口背景色等
[点我查看具体配置地址](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)
- tabBar
多tab应用时使用，tabBar配置项可以指定tab页的表现和跳转页面

tabBar属性说明：

| 属性   | 类型     | 必填  | 默认值  | 描述 |
| -------- | --------| -------| -------|-------------|
|color     |HexColoe |  true  |        |tab文字默认颜色|
|selectedColor  |HexColor|true |       |tab文字被选中颜色|
|backgroundColor|HexColor|true|        |tab背景色   |
|borderStyle| String |false   |  black |tab上边框，仅支持black/white|
|list       |Array(Object)|true|       |tab列表，最少一个，最多5个|
|position |String    |false    |bottom |可选bottom/top|

list的属性

| 属性   | 类型     | 必填 | 描述 |
| -------- | --------| -------| -------|
|pagePath  |String   |true    |页面路径|
|text      |String   |true    |tab按钮文字|
|iconPath  |String   |false   |图片路径|
|selectedIconPath|String|false|选中是图片路径|

>注：1.icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
2.tab 按数组的顺序排序。

- networkTimeout
可以设置各种网络请求的超时时间

| 属性   | 类型     | 必填 | 描述 |
| -------- | --------| -------| -------|
|request  |Number |false   |wx.request的超时时间|
|connectSocket |Number |false |wx.connectSocket的超时时间|
|uploadFile	|Number |false |wx.uploadFile的超时时间|
|downloadFile |Number |false |wx.downloadFile的超时时间|
>注：以上超时时间单位均为毫秒，默认值60000
- debug
是否开启debugger

### page.json
配置项与app.json中的windows属性相同，用来配置单独页面的windows，会覆盖app.json中的windows

