<div align="center">

# 晴天Kauai个人站点

一个纯静态的个人站点：单页三段式主页 + 独立 GitHub 项目页。

托管于 **GitHub Pages** · 自定义域名 **www.linzms.com**

</div>

---

## 简介

站点采用原生 HTML、CSS 和 JavaScript 编写，无框架、无构建、无 CDN、无后端，仓库内容推送到 GitHub Pages 即可直接访问。整体为浅蓝白底的轻量视觉。

- 主页 `index.html`：欢迎页面 → 个人介绍 → 联系我，一滑到底
- 项目页 `projects.html`：从主页「我的项目」卡片进入，展示 GitHub 公开项目

## 页面与交互

| 页面 / 区块 | 内容 |
| --- | --- |
| 欢迎页面 `#welcome` | 纯浅蓝渐变背景，浮动头像 + 站点标题 + 独立代码滚动条 + 静态三行正文，底部一个低调的装饰三角 |
| 个人介绍 `#intro` | 四张竖直卡片：业余程序员、业余无线电、语言、我的项目；文字靠上排布，悬停时突出当前卡片 |
| 联系我 `#contact` | GitHub、哔哩哔哩、YouTube、X 四张联系卡片，图标统一为蓝色纯色 |
| 项目页 `projects.html` | GuessNumber、本站源码，以及 GitHub 全部仓库入口 |

其他交互：

- 固定顶部栏：左侧站点标识，右上角文字索引（欢迎 / 个人介绍 / 联系我）
- 欢迎页代码滚动条单独循环原版四句短语，正文三行静态显示
- 主页与项目页之间 0.5s 淡出 / 淡入切换
- 滚动入场由滚动事件驱动，滚轮滑动时立即触发，不依赖鼠标移动
- 所有交互动画与页面淡入淡出统一 0.5s；头像/光环/装饰三角等循环动效保持慢速
- 移动端自适应：卡片在平板上两列、手机上单列
- 尊重系统「减弱动态效果」设置（`prefers-reduced-motion`）

## 技术栈

| 技术 | 用途 |
| --- | --- |
| HTML5 / CSS3 / JavaScript | 页面、样式与交互 |
| GitHub Pages | 静态托管 |
| DeepSeek Harness | 开发工具 |

## 目录结构

```text
.
├── index.html              # 主页（欢迎 / 个人介绍 / 联系我）
├── projects.html           # GitHub 项目页
├── CNAME                   # 自定义域名 www.linzms.com
├── README.md               # 本文件
└── assets/
    ├── css/style.css       # 全站样式、响应式与动效
    ├── js/main.js          # 年份、代码滚动、滚动入场、顶部栏、页面淡入淡出
    └── img/
        ├── avatar.png                  # 欢迎页浮动头像
        ├── og-cover.jpg                # 分享预览图
        ├── favicon.png                 # 站点图标（圆形）
        └── apple-touch-icon.png        # iOS 主屏图标（方形、不透明）
```

## 本地预览

在仓库根目录执行任意一种静态服务命令：

```powershell
# Python
python -m http.server 8000

# 或 Node.js
npx serve .
```

然后打开 `http://127.0.0.1:8000`。

## 修改指南

| 想改什么 | 改哪里 |
| --- | --- |
| 欢迎页标题 / 正文 | `index.html` 中 `.hero-title`、`.hero-sub` |
| 代码滚动短语 | `assets/js/main.js` 中的 `phrases` 数组 |
| 浮动头像 | 替换 `assets/img/avatar.png` |
| 顶部文字索引 | `index.html` 中 `.nav-links`，以及各区块的 `id` |
| 个人介绍四张卡片 | `index.html` 中 `.tiles` 内的 `.tile` |
| 联系方式与链接 | `index.html` 中 `.contact-grid` 内的 `.contact-card` |
| 项目列表 | `projects.html` 中 `.projects-list` |
| 配色与圆角 | `assets/css/style.css` 顶部 `:root` 变量 |
| 页面切换 | `assets/js/main.js` 中的 `fadeDuration` 与 `.page-curtain` 遮罩 |
| 代码滚动速度 | `assets/js/main.js` 中的 `95` / `45` / `2600` / `500` |

页面图标均为内联 SVG，统一使用 `currentColor`，改配色时只需调整 CSS 变量。

## 版权

本站文字、图片与代码由站主保留权利，未经允许请勿转载或另作他用。

---

<div align="center">

Made with **DeepSeek Harness** ✦

</div>
