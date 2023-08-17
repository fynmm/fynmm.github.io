#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
echo '22'

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

echo '11'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:fynmm/frontend.github.io.git master:gh-pages

cd -