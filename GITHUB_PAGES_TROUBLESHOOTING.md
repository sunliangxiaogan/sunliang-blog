# GitHub Pages 故障排除指南

## 问题描述
您的 GitHub Pages 网站 (https://sunliangxiaogan.github.io/sunliang-blog/) 无法通过浏览器直接访问，但在界面中可以打开。

## 已验证配置
1. **Vite 配置** (`vite.config.js`)
   - base 路径已正确设置为 `/sunliang-blog/`
   - 构建输出目录为 `dist`

2. **GitHub Actions 部署流程** (`.github/workflows/deploy.yml`)
   - 使用 `actions/deploy-pages@v4` 进行部署
   - 构建产物正确上传到 GitHub Pages

3. **构建产物验证** (`dist/index.html`)
   - JavaScript 和 CSS 资源路径已正确包含 base 路径

## 可能原因及解决方案

### 1. 缓存问题
- **原因**: 浏览器可能缓存了旧版本的页面或资源
- **解决方案**: 
  - 清除浏览器缓存或使用无痕模式访问
  - 强制刷新页面 (Ctrl+F5 或 Cmd+Shift+R)

### 2. GitHub Pages 设置
- **原因**: GitHub Pages 的源设置可能未正确配置
- **解决方案**:
  - 进入仓库 Settings -> Pages
  - 确保 Source 设置为 "Deploy from a branch" 并选择 `main` 分支
  - 保存设置并等待重新部署

### 3. 自定义域名配置
- **原因**: 如果配置了自定义域名但未正确设置 DNS 记录
- **解决方案**:
  - 检查 Settings -> Pages 中的 Custom domain 设置
  - 确保 DNS 记录正确指向 GitHub Pages IP 地址

### 4. 部署延迟
- **原因**: GitHub Pages 部署可能需要一些时间生效
- **解决方案**:
  - 等待几分钟后再次尝试访问
  - 检查 Actions 中的部署状态

### 5. 仓库可见性
- **原因**: 私有仓库的 GitHub Pages 可能需要 GitHub Enterprise 订阅
- **解决方案**:
  - 确保仓库为 Public (公共)
  - 检查您的 GitHub 订阅计划

## 进一步排查
如果以上解决方案均无效，请尝试以下步骤：
1. 在 GitHub 仓库中手动触发 Actions 部署流程
2. 检查 GitHub Pages 构建日志是否有错误信息
3. 联系 GitHub 支持团队获取帮助