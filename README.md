# Zhihu Unfollower

一个简易的chrome扩展程序, 能够批量的取关用户关注的问题~
p.s. 写这个的起因是当时想清洗帐号, 但发现取关问题居然需要点进去取关...醉了...


## Built with
javascript, html, css plus chrome API.


## Installing

我看了下chrome app的publish的流程, 感觉好麻烦，要申请账号验证交钱再验证...我这么懒的人肯定就拉倒了.
要是真有童鞋想试用一下，直接打包下载, 进入[chrome://extensions](chrome://extensions).


## Demo

* 成功安装的话, chrome右上角会有这个扩展的icon. 平时是灰色的, 也就是未启动. 必须在 "https://www[.]zhihu[.]com/people/你的id/following/questions[queryString]" 才会启动(变成彩色).

![](images/readme/1.png)

* 点击那个icon, 你会发现当前页每一个问题后面有一个checkbox.

![](images/readme/2.png)

* 勾选你想要取关的问题, 按unfollow, 搞定.

![](images/readme/3.png)


## License

欢迎自己使用或者修改, 其他就算了.
