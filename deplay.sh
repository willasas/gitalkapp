#!/usr/bin/env bash
# 当发生错误时终止脚本
set -e
# 构建
npm run build
# 部署到自定义域名
# echo 'www.example.com' > CNAME
# 进入到构建输出的目录下
cd dist
# 不要忽略 _ 开头的文件
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
# 部署到部署到 https://<USERNAME>.github.io（gitee和github上）
git push -f "https://${access_token}@gitee.com/aclor/webproject.git" master:gh-pages
start "https://gitee.com/aclor/webproject/pages"
git push -f "https://${access_token}@github.com/willasas/gitalkapp.git" master:gh-pages
cd -
exec /bin/bash