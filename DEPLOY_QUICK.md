# ⚡ 5分钟快速部署指南

## 🎯 最简单方案：Vercel 一键部署

### 1. 准备 (2分钟)
```bash
# 确保项目正常
npm run build

# 安装 Vercel CLI (只需一次)
npm i -g vercel
```

### 2. 部署 (3分钟)
```bash
# 一键部署
vercel --prod

# 按提示操作：
# 1. 登录 Vercel 账号
# 2. 选择项目设置
# 3. 部署完成！
```

### 3. 域名配置 (可选)
```bash
# 添加自定义域名
vercel domains add slucius.com

# 在域名商配置 DNS:
# A记录: 76.76.19.61
# CNAME: cname.vercel-dns.com
```

---

## 🚀 部署地址

部署后你将获得：
- **临时域名**: `https://your-project.vercel.app`
- **自定义域名**: `https://slucius.com` (配置后)

---

## 📋 完整部署清单

### ✅ 已完成
- [x] 项目构建配置
- [x] 部署脚本创建
- [x] 域名配置指南
- [x] 一键部署方案

### 📞 联系方式集成
- [x] 电话: 18515570141
- [x] 微信: 二维码展示
- [x] 邮箱: slucius@mail.ustc.edu.cn
- [x] 简历: https://isunliang.github.io

---

## 🎯 立即开始

1. **打开终端**
2. **运行**: `cd /Users/sunliang8/Documents/awsPros/myblog/leong-blog`
3. **执行**: `./deploy.sh vercel`
4. **完成！** 🎉

**预计时间**: 5分钟完成部署