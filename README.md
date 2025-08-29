# 孙亮的个人网站

这是一个现代艺术风格的个人网站，采用React + Vite构建。

## 项目结构

```
src/
├── components/     # 公共组件
├── pages/          # 页面组件
├── styles/         # 全局样式
└── assets/         # 静态资源
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 部署到GitHub Pages

项目配置了GitHub Actions自动部署到GitHub Pages。

1. 确保代码推送到`main`分支
2. GitHub Actions会自动构建并部署到GitHub Pages

访问地址: https://[username].github.io/sunliang-blog/

## 功能实现

- [x] 导航栏设计
  - 左上角网站名称: slucius
  - 右上角导航链接: 技术、健身、读书、博客、联系我
  - 暗黑色调设计
- [x] 主页设计
  - 全屏简介内容
  - 视频背景占位
  - 简介文字: "你好,我是亮仔,一名热爱生活的AI算法工程师"
  - 底部按钮: 查看作品、联系我
- [x] 视觉效果
  - 暗黑色系配色
  - 动感炫酷的特效元素
  - 现代感的艺术风格

## 后续开发计划

- 实现其他页面内容
- 添加视频背景支持
- 增加更多交互效果
- 优化移动端体验