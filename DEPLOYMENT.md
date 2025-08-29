# 🚀 部署指南 - SluciuS 个人博客

## 📋 部署选项概览

### 1. Vercel (推荐) - 免费且简单
### 2. Netlify - 免费且功能丰富
### 3. GitHub Pages - 完全免费
### 4. AWS S3 + CloudFront - 企业级方案

---

## 🎯 方案一：Vercel 部署 (推荐)

### ✅ 步骤

#### 1. 准备项目
```bash
# 确保项目可以正常构建
npm run build
```

#### 2. 安装 Vercel CLI
```bash
npm i -g vercel
```

#### 3. 部署到 Vercel
```bash
# 在项目根目录执行
vercel --prod

# 首次部署会提示登录和配置
# 选择: React + Vite 配置
```

#### 4. 自定义域名配置
```bash
# 在 Vercel 控制台设置域名
vercel domains add yourdomain.com
```

---

## 🌐 方案二：Netlify 部署

### ✅ 步骤

#### 1. 构建项目
```bash
npm run build
```

#### 2. 拖拽部署
- 访问 [netlify.com](https://netlify.com)
- 拖拽 `dist` 文件夹到网页
- 自动部署完成

#### 3. 自定义域名
- 进入 Site settings → Domain management
- 添加自定义域名
- 配置 DNS 指向 Netlify

---

## 📄 方案三：GitHub Pages 部署

### ✅ 步骤

#### 1. 创建 GitHub 仓库
```bash
# 初始化 git（如果还没做）
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/slucius-blog.git
git push -u origin main
```

#### 2. 配置 GitHub Actions
创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### 3. 启用 GitHub Pages
- 进入仓库 Settings → Pages
- Source 选择 GitHub Actions

---

## 🏢 方案四：AWS S3 + CloudFront (企业级)

### ✅ 步骤

#### 1. 创建 S3 存储桶
```bash
# 使用 AWS CLI
aws s3 mb s3://slucius-blog --region us-east-1

# 配置为静态网站托管
aws s3 website s3://slucius-blog --index-document index.html --error-document index.html
```

#### 2. 构建并上传
```bash
npm run build
aws s3 sync dist/ s3://slucius-blog --delete
```

#### 3. 配置 CloudFront
```bash
# 创建 CloudFront 分发
aws cloudfront create-distribution --origin-domain-name slucius-blog.s3.amazonaws.com
```

#### 4. 自定义域名
- 在 Route 53 创建域名记录
- 指向 CloudFront 分发域名

---

## 🌐 域名配置详解

### 1. 购买域名
- **国内**: 阿里云、腾讯云、华为云
- **国外**: Namecheap、GoDaddy、Cloudflare

### 2. DNS 配置示例

#### Vercel 配置
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### Netlify 配置
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

#### GitHub Pages 配置
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

---

## 🔧 项目配置优化

### 1. 更新 `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 对于 GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

### 2. 环境变量配置
创建 `.env.production`:
```
VITE_APP_URL=https://yourdomain.com
VITE_APP_TITLE=SluciuS 个人博客
```

---

## 📊 部署后检查清单

### ✅ 功能测试
- [ ] 网站正常访问
- [ ] 所有链接有效
- [ ] 微信二维码可扫码
- [ ] 响应式设计正常
- [ ] 动画效果正常

### ✅ SEO 优化
- [ ] 添加 favicon
- [ ] 设置 meta 标签
- [ ] 配置 sitemap.xml
- [ ] 设置 robots.txt

### ✅ 性能优化
- [ ] 启用压缩
- [ ] 设置缓存头
- [ ] 图片优化
- [ ] CDN 配置

---

## 🚨 常见问题解决

### 1. 构建失败
```bash
# 清理缓存
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 2. 路由问题 (GitHub Pages)
- 使用 hash 路由
- 或配置 404.html

### 3. 图片加载问题
- 确保使用相对路径
- 检查图片大小写

---

## 🎯 推荐方案

**初学者**: GitHub Pages (免费 + 简单)
**专业用户**: Vercel (免费 + 强大)
**企业用户**: AWS S3 + CloudFront

## 📞 技术支持

部署过程中遇到问题，请检查：
1. 项目是否能本地正常构建
2. 域名解析是否正确
3. 环境变量是否配置
4. 查看部署平台日志

---

**下一步**: 选择你喜欢的部署方案，开始部署你的 SluciuS 个人博客吧！