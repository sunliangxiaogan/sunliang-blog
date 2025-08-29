# 🔧 部署故障排除指南

## 🚨 当前问题：404 错误

### 可能原因：
1. **GitHub Pages 未启用** ✅ 最常见
2. **构建失败** 
3. **部署未完成**
4. **base路径配置问题**

## ✅ 立即解决步骤

### 步骤1：启用 GitHub Pages
**访问：** https://github.com/sunliangxiaogan/sunliang-blog/settings/pages

**配置：**
- **Source**: "Deploy from a branch"
- **Branch**: "main" 
- **Folder**: "/ (root)"
- 点击 **Save**

### 步骤2：检查构建状态
**访问：** https://github.com/sunliangxiaogan/sunliang-blog/actions

**应该看到：**
- 工作流名称："Deploy to GitHub Pages"
- 状态：绿色 ✅ 或 黄色 🔄

### 步骤3：验证配置

#### 检查 vite.config.js
```javascript
export default defineConfig({
  base: '/sunliang-blog/', // ✅ 确保这个值正确
  // ...
})
```

#### 检查 package.json
```json
{
  "homepage": "https://sunliangxiaogan.github.io/sunliang-blog/" // ✅ 应该包含这个
}
```

## 🔄 如果仍然失败

### 强制重新部署
```bash
# 在本地执行
git commit --allow-empty -m "trigger redeploy"
git push
```

### 检查仓库设置
1. **Settings > Actions > General**
   - 确保 "Workflow permissions" 设置为 "Read and write permissions"

2. **Settings > Pages**
   - 确认显示 "Your site is published at..."

## 📍 成功验证

### 预期访问地址：
- **主页**: https://sunliangxiaogan.github.io/sunliang-blog/
- **联系页面**: https://sunliangxiaogan.github.io/sunliang-blog/contact

### 验证方法：
```bash
# 检查网站是否可访问
curl -I https://sunliangxiaogan.github.io/sunliang-blog/
```

## 🎯 常见错误解决

| 错误 | 解决方法 |
|------|----------|
| 404 Not Found | 启用 GitHub Pages |
| 空白页面 | 检查 base 路径配置 |
| 资源加载失败 | 确认构建输出目录 |
| 样式丢失 | 检查相对路径设置 |

## 📞 需要帮助

如果以上步骤仍无法解决：
1. 检查 GitHub Actions 日志
2. 确认仓库为 Public
3. 等待 5-10 分钟（首次部署较慢）