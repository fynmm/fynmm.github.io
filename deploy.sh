#!/usr/bin/env sh

if [ -z $1 ]
then
    echo commit-msg不能为空
else
   

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m $1

# git push origin master

# if you are deploying to https://<USERNAME>.github.io
git push -u git@github.com:fynmm/fynmm.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

git add .
git commit -m $1
git push


fi