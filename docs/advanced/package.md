---
  lang: zh-CN
  title: Package版本修复
  description: node npm pnpm npm包修复 
---

# 修改npm包

## 背景
::: info npm包有bug
有一种场景：如果你在开发过程中，发现某个npm包有Bug，应该怎么办？
:::

## 解决方案(两种)
- 向原作者提issue，或者Fork该仓库代码，修改以后，提交合并请求。但是作者不一定能及时响应。
- 临时修改bug，此时又分成2种
  - 改动量少，可以直接修改npm包代码的，考虑补丁方案。
  - 改动量多，或者npm包代码是压缩混淆过的，不具备修改条件。修改源码后，再修改包名，重新发布，在应用代码中更换引用。这里称作更换包名方案。


### 第一种-补丁方案
::: info npm版
1. npm i patch-package
2. 在node_modules中找到你需要修改的包，修改并保存 
3. npx patch-package package-name //package-name是你修改的包名
4. 第三步运行后会在项目根目录下创建一个patches文件夹，并生成一个名为package-name+version.patch的文件。
5. 在```package.json```的```scripts```中加入```"postinstall":"patch-package"```
```js
// package.json
"scripts": {
  "postinstall": "patch-package"
}
```
:::

::: info pnpm版
1. pnpm patch package-name // package-name是你修改的包名
2. 执行完上一步之后会有一个路径，打开后，修改代码并保存 
3. ```pnpm patch-commit '/private/var/folders/3c/wgkg24rx33j306r688k19f4h0000gn/T/a9b0966db0c1fdd2c9aee661d7d217fc'``` // 这段代码也是第一步中提示的
4. 然后你会发现```package.json```多了一部分内容
```js
"pnpm": {
    "patchedDependencies": {
      "is-even@1.0.0": "patches/is-even@1.0.0.patch"
    }
}
```
5. 删除node_modules，重新pnpm i安装依赖，仍然与现在一样，这就代表成功了。

:::

### 第二种-更换包名
::: info 更换包名
上面说过，如果要修改的代码较多，或者不具备修改条件，这时就需要修改源码。 到GitHub上找到npm包的源码，Fork该项目，修改代码后，再修改包名，重新发布，比如你要修改的包是lodash，可以修改为awesome-lodash，在应用代码中更换引用。
:::
如果是你自己项目依赖需要修改的包(lodash)，那直接npm install修改后的包(awesome-lodash)，但是如果是第三方依赖的包有问题，应该怎么修改？我们不可能再去修改第三方的依赖方式，太麻烦了。
使用```pnpm```可以解决
1. 在根目录下新建```.pnpmfile.cjs```文件
```js
function readPackage(pkg) {
  if (pkg.dependencies && pkg.dependencies.lodash) {
    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
```
此时就能修复第三方包里依赖的包有问题，直接替代它。













