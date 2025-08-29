# 🚀 GitHub Pages 部署指南

## 📋 步骤 1: 创建 GitHub 仓库

1. **登录 GitHub**: https://github.com/login
2. **创建新仓库**:
   - 仓库名称: `sunliang-blog`
   - 描述: "个人博客网站 - 包含联系方式和简历链接"
   - 选择: Public
   - 不要勾选 "Initialize this repository with a README"

## 📋 步骤 2: 推送代码到 GitHub

在终端中运行以下命令：

```bash
# 确保在项目目录
cd /Users/sunliang8/Documents/awsPros/myblog/leong-blog

# 添加远程仓库 (用你的GitHub用户名替换)
git remote add origin https://github.com/sunliangxiaogan/sunliang-blog.git

# 推送代码
git branch -M main
git push -u origin main
```

## 📋 步骤 3: 启用 GitHub Pages

1. **进入仓库设置**:
   - 访问: https://github.com/sunliangxiaogan/sunliang-blog
   - 点击 "Settings" 标签
   - 左侧菜单选择 "Pages"

2. **配置 Pages**:
   - Source: "Deploy from a branch"
   - Branch: "main" 
   - Folder: "/ (root)"
   - 点击 "Save"

## 📋 步骤 4: 等待部署完成

- **部署时间**: 通常 5-10 分钟
- **访问地址**: https://sunliangxiaogan.github.io/sunliang-blog/
- **检查状态**: 在仓库的 "Actions" 标签查看部署状态

## 📋 步骤 5: 验证部署

部署完成后，访问以下链接检查：
- **主页**: https://sunliangxiaogan.github.io/sunliang-blog/
- **联系页面**: https://sunliangxiaogan.github.io/sunliang-blog/contact

## 🔧 自定义域名 (可选)

如果你想使用自定义域名：

1. **在仓库创建 CNAME 文件**: 
   ```bash
   echo "slucius.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **配置 DNS**:
   - 在你的域名提供商处添加 CNAME 记录
   - 指向: `sunliangxiaogan.github.io`

## 🎯 一键部署

推送代码后，GitHub Actions 会自动部署：
- 每次推送到 main 分支都会触发部署
- 在 "Actions" 标签查看部署状态
- 部署完成后自动更新网站

## 📞 联系方式确认

部署完成后，你的网站将包含：
- ✅ 电话: 18515570141
- ✅ 微信: 二维码 (PNG格式)
- ✅ 邮箱: slucius@mail.ustc.edu.cn
- ✅ 简历: https://isunliang.github.io

## 🚨 常见问题

### 1. 图片加载失败
- 确保所有图片路径使用相对路径
- 检查图片是否已上传到 GitHub

### 2. 样式问题
- 清除浏览器缓存
- 检查浏览器开发者工具

### 3. 部署失败
- 检查 "Actions" 标签的错误日志
- 确保 package.json 中的脚本正确

## ✅ 完成检查清单

- [ ] 创建 GitHub 仓库
- [ ] 推送代码到 main 分支
- [ ] 启用 GitHub Pages
- [ ] 验证网站访问
- [ ] 测试所有链接
- [ ] 检查微信二维码显示

**预计完成时间**: 10-15 分钟

**最终访问地址**: https://sunliangxiaogan.github.io/sunliang-blog/