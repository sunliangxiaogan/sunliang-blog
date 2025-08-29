#!/bin/bash

# 🚨 紧急修复404错误脚本

echo "🔧 开始修复404错误..."

# 1. 检查当前配置
echo "📋 检查当前配置..."
echo "vite.config.js base路径:"
grep "base:" vite.config.js

echo ""
echo "package.json homepage:"
grep "homepage" package.json || echo "未设置homepage"

# 2. 确保homepage设置正确
echo "🔧 更新package.json..."
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.homepage = 'https://sunliangxiaogan.github.io/sunliang-blog/';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log('✅ homepage已更新');
"

# 3. 重新构建并提交
echo "🔨 重新构建..."
npm run build

echo "🔄 提交更改..."
git add package.json
git commit -m "🚨 fix: add homepage for GitHub Pages" || echo "无需提交"

# 4. 触发GitHub默认部署
echo "🚀 触发GitHub Pages重新部署..."
git commit --allow-empty -m "🔄 trigger GitHub Pages redeploy"
git push

echo ""
echo "✅ 修复完成！"
echo ""
echo "📊 检查状态："
echo "- GitHub Actions: https://github.com/sunliangxiaogan/sunliang-blog/actions"
echo "- Pages状态: https://github.com/sunliangxiaogan/sunliang-blog/settings/pages"
echo ""
echo "⏱️ 等待2-5分钟后访问："
echo "- https://sunliangxiaogan.github.io/sunliang-blog/"