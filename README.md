<div align="center">

# ☀️ 晴天Kauai · 个人主页

纯静态个人主页源码 · 部署于 GitHub Pages · 绑定自定义域名 **www.linzms.com**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)](https://www.linzms.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

✨ 本站由 **DeepSeek Harness** 制作

</div>

---

## 📄 项目简介

一个纯静态的个人主页，采用可上下滚动的单页布局，分为首屏、关于、社交链接、联系方式四个区块。
无框架、无构建、无后端，克隆后上传至 GitHub Pages 即可上线。

- 在线预览：**https://www.linzms.com**

## ✨ 功能特性

- 纯静态实现：HTML + CSS + JavaScript，零依赖、零构建、零 CDN
- 响应式布局，适配手机 / 平板 / 桌面
- 动效：滚动入场淡入、打字机副标题、卡片悬停上浮、柔和光斑背景
- 尊重系统"减弱动态效果"（`prefers-reduced-motion`）设置

## 🧰 技术栈

| 技术 | 用途 |
| --- | --- |
| HTML5 / CSS3 / JavaScript | 页面实现 |
| GitHub Pages | 静态托管 |
| DeepSeek Harness | 制作工具 |

## 📁 目录结构

```text
root/
├── index.html          # 页面主体（结构与文案）
├── README.md           # 项目说明（本文件）
├── LICENSE             # MIT 开源许可
├── CNAME               # 自定义域名（www.linzms.com）
└── assets/
    ├── css/style.css   # 全部样式与动画
    ├── js/main.js      # 滚动入场 / 打字机 / 导航阴影 / 年份
    └── img/            # 头像与站点图标
```

## 🎨 自定义指南

- **头像**：替换 `assets/img/avatar.png`（建议正方形、512px 左右），或修改 `index.html` 中的图片路径
- **打字机文案**：编辑 `assets/js/main.js` 中的 `phrases` 数组
- **配色**：修改 `assets/css/style.css` 顶部的 `:root` 变量（如 `--accent`、`--grad`）
- **社交链接**：编辑 `index.html` 中 `<section id="links">` 内的链接卡片

## 📜 许可

本项目代码基于 [MIT License](LICENSE) 开源，可自由使用与修改。

---

<div align="center">

Made with ❤️ and ✦ **DeepSeek Harness**

</div>
