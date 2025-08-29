# 🌐 域名配置指南

## 📍 推荐域名注册商

### 国内域名商
- **阿里云**: https://wanwang.aliyun.com
- **腾讯云**: https://dnspod.cloud.tencent.com
- **华为云**: https://www.huaweicloud.com

### 国外域名商
- **Namecheap**: https://www.namecheap.com
- **Cloudflare**: https://dash.cloudflare.com
- **GoDaddy**: https://www.godaddy.com

---

## 🎯 域名推荐

### 个人品牌域名
- `slucius.com` (首选)
- `slucius.cn` (国内)
- `slucius.me` (个人)
- `sunliang.dev` (开发者)

### 博客相关域名
- `slucius-blog.com`
- `sunliang-blog.com`
- `liang-blog.cn`

---

## 🔧 具体配置步骤

### 方案1: Vercel + 阿里云域名

#### 1. 购买域名
- 登录阿里云 → 域名注册
- 搜索并购买 `slucius.com`

#### 2. DNS 配置
```
记录类型: A
主机记录: @
记录值: 76.76.19.61
TTL: 10分钟

记录类型: CNAME
主机记录: www
记录值: cname.vercel-dns.com
TTL: 10分钟
```

#### 3. Vercel 配置
- 登录 Vercel 控制台
- 进入项目 → Settings → Domains
- 添加域名 `slucius.com`

---

### 方案2: Netlify + 腾讯云域名

#### 1. DNS 配置
```
记录类型: A
主机记录: @
记录值: 75.2.60.5
TTL: 600

记录类型: CNAME
主机记录: www
记录值: your-site-name.netlify.app
TTL: 600
```

---

### 方案3:#### GitHub Pages 配置
```bash
# 1. DNS 配置
记录类型: CNAME
主机记录: www
记录值: sunliangxiaogan.github.io
TTL: Auto

记录类型: A
主机记录: @
记录值: 185.199.108.153
TTL: Auto
```

---

## 🚀 快速配置模板

### 域名: slucius.com

#### Vercel 配置
```bash
# 1. 在 Vercel 添加域名
vercel domains add slucius.com

# 2. 配置 DNS (阿里云示例)
# 登录阿里云控制台 → DNS解析 → 添加记录

# A记录
主机记录: @
记录值: 76.76.19.61

# CNAME记录
主机记录: www
记录值: cname.vercel-dns.com
```

#### Netlify 配置
```bash
# 1. 在 Netlify 添加域名
# 2. 配置 DNS

# A记录
主机记录: @
记录值: 75.2.60.5

# CNAME记录
主机记录: www
记录值: [your-site].netlify.app
```

---

## 🔍 验证配置

### 1. DNS 检查
```bash
# 检查域名解析
nslookup slucius.com
dig slucius.com

# 检查全球DNS传播
https://dnschecker.org/
```

### 2. SSL 证书检查
```bash
# 检查HTTPS配置
https://www.ssllabs.com/ssltest/
```

---

## 📱 手机端配置

### 微信小程序要求
- 域名必须备案
- 必须配置 HTTPS
- 需要添加业务域名

### 配置步骤
1. 域名备案 (国内域名)
2. 申请 SSL 证书
3. 配置 HTTPS
4. 在微信公众平台添加业务域名

---

## 💰 费用预算

| 项目 | 费用 | 说明 |
|------|------|------|
| 域名注册 | ¥50-100/年 | .com域名 |
| SSL证书 | 免费 | Let's Encrypt |
| 托管服务 | 免费 | Vercel/Netlify |
| CDN | 免费 | Cloudflare |

**总计**: ¥50-100/年

---

## 🚨 常见问题

### 1. 域名解析不生效
- 等待 DNS 传播 (最多48小时)
- 检查 DNS 配置是否正确
- 清除本地 DNS 缓存

### 2. HTTPS 证书问题
- 确保域名已正确配置
- 检查 SSL 证书有效期
- 使用 Cloudflare 自动SSL

### 3. 备案问题 (国内)
- 服务器必须在国内
- 域名必须实名认证
- 备案时间: 1-20个工作日

---

## 🎯 下一步行动

1. **选择域名**: 推荐 `slucius.com`
2. **选择平台**: 推荐 Vercel (免费+简单)
3. **配置DNS**: 按上述模板配置
4. **测试访问**: 验证网站正常

**预计时间**: 1-2小时完成部署