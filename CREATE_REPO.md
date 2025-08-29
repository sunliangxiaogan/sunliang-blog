# 🚀 创建 GitHub 仓库指南

## 📋 步骤 1: 创建 GitHub 仓库

### 方法 A: 使用 GitHub 网页
1. 访问：https://github.com/new
2. 仓库名称：`sunliang-blog`
3. 描述：`个人博客网站 - 包含联系方式和简历链接`
4. 选择：`Public`
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 方法 B: 使用 GitHub CLI (如果已安装)
```bash
gh repo create sunliangxiaogan/sunliang-blog --public --description "个人博客网站 - 包含联系方式和简历链接"
```

## 📋 步骤 2: 推送代码

创建仓库后，在终端运行：

```bash
cd /Users/sunliang8/Documents/awsPros/myblog/sunliang-blog

# 如果仓库刚创建，添加远程仓库
git remote add origin https://github.com/sunliangxiaogan/sunliang-blog.git

# 如果仓库已存在，更新远程仓库
git remote set-url origin https://github.com/sunliangxiaogan/sunliang-blog.git

# 推送代码
git branch -M main
git push -u origin main
```

## 📋 步骤 3: 启用 GitHub Pages

1. 访问：https://github.com/sunliangxiaogan/sunliang-blog/settings/pages
2. 选择：
   - **Source**: "Deploy from a branch"
   - **Branch**: "main"
   - **Folder**: "/ (root)"
3. 点击 "Save"

## 📋 步骤 4: 验证部署

部署完成后访问：
- **主页**: https://sunliangxiaogan.github.io/sunliang-blog/
- **联系页面**: https://sunliangxiaogan.github.io/sunliang-blog/contact

## 🚨 常见问题解决

### 如果推送失败
```bash
# 强制推送（仅第一次）
git push -u origin main --force

# 或者先拉取再推送
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 如果仓库已存在
```bash
# 删除并重新添加远程仓库
git remote remove origin
git remote add origin https://github.com/sunliangxiaogan/sunliang-blog.git
```

## 🎯 一键部署命令

创建仓库后，你可以使用：
```bash
./deploy.sh gh-pages
```

## ✅ 完成检查清单

- [ ] 创建 GitHub 仓库 `sunliang-blog`
- [ ] 推送代码到 main 分支
- [ ] 启用 GitHub Pages
- [ ] 验证网站访问
- [ ] 测试联系页面功能

**预计完成时间**: 5-10分钟