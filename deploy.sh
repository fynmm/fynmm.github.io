#!/usr/bin/env sh
set -e

npm run build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:fynmm/heartlessSoy.github.io.git master:gh-pages

cd -

rm -rf docs/.vitepress/dist