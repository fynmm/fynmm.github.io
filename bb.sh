#!/bin/bash

# /usr/local/bin/npm run deploy
# abort on errors
set -e
echo $PATH
node -v
npm -v

# build
npm install


folder="./docs/.vitepress/dist"  # 替换为你要删除的文件夹的实际路径  


if [ -d "$folder" ]; then  
    rm -rf "$folder"  
    echo "文件夹已删除。"  
else  
    echo "文件夹不存在。不用删除。"  
fi


source="./dist"
if [ -d "$source" ]; then  
    rm -rf "$source"  
    echo "dist已删除。"  
else  
    echo "dist不存在。不用删除。"  
fi
npm run build
echo "打包成功"
mv $folder $source
filename="./dist.tar.gz"  
  
if [ -f "$filename" ]; then  
	rm "$filename" 
    echo "文件 $filename 已删除"  
else  
    echo "文件 $filename 不需要删除"  
fi
tar -czvf $filename $source/*
echo "压缩成功"
rm -rf "$source"
echo "删除dist成功"