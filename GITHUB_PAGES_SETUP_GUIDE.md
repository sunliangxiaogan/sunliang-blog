# GitHub Pages 配置指南

按照以下步骤配置您的 GitHub Pages：

1. 登录到 GitHub 并进入您的仓库。
2. 点击 "Settings" 选项卡。
3. 向下滚动到 "Pages" 部分。
4. 在 "Source" 下拉菜单中，选择 "main" 分支。
5. 确保文件夹设置为 "/ (root)"。
6. 点击 "Save" 保存设置。
7. 等待几分钟让 GitHub 完成部署。

部署完成后，您应该能够通过以下 URL 访问您的网站：
https://sunliangxiaogan.github.io/sunliang-blog/

如果仍有问题，请检查：
- 确保您的仓库名称是 `sunliang-blog`
- 确保 Vite 配置中的 `base` 路径设置正确
- 检查 GitHub Actions 工作流是否成功运行