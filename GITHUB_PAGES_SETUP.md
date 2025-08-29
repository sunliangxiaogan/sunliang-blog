# GitHub Pages 配置指南

您的博客已经准备好部署到 GitHub Pages。请按照以下步骤完成配置：

## 1. 登录 GitHub

访问 [GitHub](https://github.com) 并登录您的账户。

## 2. 进入仓库设置

1. 导航到您的仓库 `sunliang-blog`
2. 点击页面顶部的 "Settings" 选项卡

## 3. 配置 GitHub Pages

1. 在设置页面中，向下滚动找到 "Pages" 部分
2. 在 "Source" 下拉菜单中，选择以下选项之一：
   - **Deploy from a branch** 选项
   - 选择分支: `main`
   - 选择文件夹: `/ (root)`
3. 点击 "Save" 保存设置

## 4. 等待部署完成

1. GitHub Actions 将自动触发部署流程
2. 您可以在仓库的 "Actions" 选项卡中查看部署进度
3. 部署完成后，您的网站将可以通过以下 URL 访问：
   `https://[您的用户名].github.io/sunliang-blog/`

## 5. 验证部署

1. 等待几分钟让 GitHub 完成部署过程
2. 访问您的网站 URL 确认一切正常工作
3. 如果遇到问题，请检查浏览器控制台和网络请求

## 注意事项

- 首次部署可能需要几分钟时间
- 每次推送到 `main` 分支都会自动触发重新部署
- 确保您的 `vite.config.js` 中的 `base` 路径设置正确

如有任何问题，请参考 [GitHub Pages 官方文档](https://docs.github.com/en/pages)。