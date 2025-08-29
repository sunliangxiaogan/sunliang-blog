#!/bin/bash
# 🚨 终极修复脚本 - 一次性解决所有问题

echo "🚀 开始终极修复..."

# 1. 清理并重新构建
rm -rf dist/
npm run build

# 2. 验证构建产物
if [ ! -f "dist/index.html" ]; then
    echo "❌ 构建失败"
    exit 1
fi

# 3. 强制部署构建产物到gh-pages分支
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
cp dist/.gitignore . 2>/dev/null || true

# 4. 创建正确的CNAME和404页面
cat > CNAME << EOF
sunliangxiaogan.github.io
EOF

cp public/404.html . 2>/dev/null || cat > 404.html << EOF
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>孙亮的个人网站</title>
    <meta http-equiv="refresh" content="0; url=/sunliang-blog/">
</head>
<body>
    <script>window.location.href = '/sunliang-blog/'</script>
</body>
</html>
EOF

# 5. 提交并强制推送
git add .
git commit -m "🎯 终极修复：部署正确构建产物"
git push origin gh-pages --force

# 6. 设置GitHub Pages源为gh-pages分支
echo "🔄 设置GitHub Pages源为gh-pages分支..."
gh api repos/sunliangxiaogan/sunliang-blog/pages --method PUT --input - <<< '{
  "source": {
    "branch": "gh-pages",
    "path": "/"
  }
}'

# 7. 返回main分支
git checkout main

echo "✅ 终极修复完成！"
echo "🌐 立即访问："
echo "   主页: https://sunliangxiaogan.github.io/sunliang-blog/"
echo "   联系页面: https://sunliangxiaogan.github.io/sunliang-blog/contact"
echo "⏱️  等待30秒后刷新页面"