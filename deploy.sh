#!/bin/bash

# SluciuS 个人博客部署脚本
# 使用方法: ./deploy.sh [vercel|netlify|gh-pages]

set -e

echo "🚀 开始部署 SluciuS 个人博客..."

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查参数
DEPLOY_TARGET=${1:-"vercel"}

echo -e "${YELLOW}📦 构建项目...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ 构建失败，请检查错误信息${NC}"
    exit 1
fi

echo -e "${GREEN}✅ 构建成功！${NC}"

case $DEPLOY_TARGET in
    "vercel")
        echo -e "${YELLOW}🌐 部署到 Vercel...${NC}"
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo -e "${RED}❌ 请先安装 Vercel CLI: npm i -g vercel${NC}"
            exit 1
        fi
        ;;
    "netlify")
        echo -e "${YELLOW}🌐 部署到 Netlify...${NC}"
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
        else
            echo -e "${YELLOW}📋 请手动上传 dist 文件夹到 Netlify${NC}"
            echo "📁 构建文件位置: $(pwd)/dist"
        fi
        ;;
    "gh-pages")
        echo -e "${YELLOW}🌐 部署到 GitHub Pages...${NC}"
        
        # 检查是否是git仓库
        if [ ! -d ".git" ]; then
            echo -e "${RED}❌ 请先初始化git仓库${NC}"
            echo "运行: git init && git add . && git commit -m 'Initial commit'"
            exit 1
        fi
        
        # 安装gh-pages
        if ! npm list gh-pages &> /dev/null; then
            echo -e "${YELLOW}📦 安装 gh-pages...${NC}"
            npm install --save-dev gh-pages
        fi
        
        # 部署
        npm run deploy
        ;;
    *)
        echo -e "${RED}❌ 无效的部署目标: $DEPLOY_TARGET${NC}"
        echo "使用方法: ./deploy.sh [vercel|netlify|gh-pages]"
        exit 1
        ;;
esac

echo -e "${GREEN}🎉 部署完成！${NC}"
echo -e "${GREEN}🌐 访问你的网站: https://yourdomain.com${NC}"