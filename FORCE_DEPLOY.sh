#!/bin/bash

# 🚀 强制重新部署脚本

set -e

echo "🔄 开始强制重新部署..."

# 1. 检查GitHub Pages是否启用
echo "📋 检查GitHub Pages设置..."
echo "访问: https://github.com/sunliangxiaogan/sunliang-blog/settings/pages"
echo "确保选择: Deploy from a branch -> main branch"
echo ""

# 2. 本地构建验证
echo "🔨 验证本地构建..."
npm run build

# 3. 触发重新部署
echo "🔄 触发GitHub Actions重新部署..."
git commit --allow-empty -m "🚀 trigger redeploy: $(date)"
git push

echo ""
echo "✅ 部署已触发！"
echo ""
echo "📊 检查部署状态:"
echo "- GitHub Actions: https://github.com/sunliangxiaogan/sunliang-blog/actions"
echo "- 预计等待: 2-5 分钟"
echo ""
echo "🌐 最终访问地址:"
echo "- 主页: https://sunliangxiaogan.github.io/sunliang-blog/"
echo "- 联系页面: https://sunliangxiaogan.github.io/sunliang-blog/contact"
echo ""
echo "如果5分钟后仍无法访问，请检查TROUBLESHOOT.md"