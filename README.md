## TypeScript 库基础模板

### 使用方式

1. `clone`或者下载本模版的压缩包，如果是`clone`的，请删除`.git`文件夹
2. 包管理器为[yarn v4](https://yarnpkg.com/)，请确保`corepack`已经开启
3. 运行`yarn`安装依赖
4. 在 `src`目录开发代码

### 代码提交

> 此模版配置了`husky`来运行提交前所必须的校验以及`commitlint`对提交信息进行规范性检测，因此你需要确认：

- `husky`被正确初始化，如果没有请执行`npx husky init`
- `package.json`中的`lint-staged`字段被按需设置
- 修改`changelog.config.js`，设置你自己的`scopes`

提交代码时使用`yarn commit`，不要直接使用`git commit`

### 构建

> 此模版使用了[rollup](https://rollupjs.org/)来构建`ES6`代码，并使用了一系列插件来组织构建过程

- [@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs) 处理`CommonJS`代码
- [@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json) 处理`.json`文件为`ES6`模块
- [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve) 查找和处理`node_modules`依赖
- [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts) 生成类型定义文件`.d.ts`
- [rollup-plugin-esbuild](https://www.npmjs.com/package/rollup-plugin-esbuild) `esbuild`的`rollup`插件，在此模版中用于编译`.ts`文件

此模版内置了两种构建配置

1. `rollup.config.ts` 打包输出为单文件构建方式，运行命令`yarn build`
2. `rollup.preserve.ts` 按照源文件目录输出构建，运行命令`yarn build:preserve`

### 发布

> 此模版使用了[release-it](https://www.npmjs.com/package/release-it)用于管理包版本、生成release、发布到npm等

使用`yarn release:xx:xxx`(具体见`package.json`)执行发布过程，更多关于包版本的信息可以运行`npm help version`或查看[此文章](https://github.com/mqyqingfeng/Blog/issues/312)

请根据自身情况配置`release-it`，`release-it`默认不发布包，你可以执行`yarn pub`执行默认发布或者`yarn run:publish`执行带`tag`的发布

### 文档

> 此模版内置了`vitepress`静态站点生成器，并且基于使用`github workflow`编写了发布到`github pages`的配置脚本 你也可以查看[部署](https://vitepress.dev/zh/guide/deploy)选择合适的方式完成文档部署

> tips: 如果使用`github pages`请按照[此文章](https://michaelcurrin.github.io/code-cookbook/recipes/ci-cd/github-actions/tokens/access-token.html#name-of-the-token)设置`ACCESS_TOKEN`

### 单元测试

> 此模版内置了最基础的基于`vitest`测试框架，根据不同测试需要需要进行额外的配置，`yarn test`测试用例
