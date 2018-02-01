# missin
---
Miss in your lost.(随便写的，后面根据需求改)

**目录结构**

服务端目前版本是express实现，其他实现方式直接在server目录下以实现方式添加新的目录。

客户端目前版本是基于APICloud实现(废弃)，其他实现方式直接在对应展示方式的目录下以实现方式添加新的目录；新的展示方式直接在根目录下创建目录。
```
docs            // 文档
server          // 服务端
    - express       // express实现
json-server     // mock测试数据服务
web             // 客户端web形式
app             // 客户端app形式
```
对于新增的功能模块或实现方式，请自行补充完善相关文档。

**项目运行**

每个子项目的运行脚本在最外层的`package.json`中有配置，依赖模块则在单独的子项目中。因此，以下为子项目创建及本地运行的具体步骤(推荐但非必须)：
```
// 进入子项目所在目录，执行
npm init
// 根据提示输入子项目信息，生成子项目的package.json文件

// 在子项目所在目录，执行
npm install xxx --save/--save-dev
// 安装子项目依赖

// 对于已存在的子项目，在子项目目录下执行
npm install
// 安装子项目依赖

// 切换到根目录下，在package.json中填写子项目的执行脚本
"scripts": {
  // 子项目执行脚本命令
}

// 运行子项目，以server/express为例，在根目录下执行
npm run ex-server
```

**版本更新记录**

- 2018.01.31 初始版本

  - 服务端(server): express
  - 客户端(client): 无
  - 数据库：MySQL

**约定**

```
server端口：3xxx

client端口：4xxx或9xxx
```

**代码提交约定**
```
主分支：master (仅接受develop发起的merge请求和hofix工作流的merge请求)

开发分支：develop (仅接受merge请求)

功能分支：feature/功能点名称

修复分支：hotfix/修复点名称
```
分支合并顺序：

feature -> develop -> master

hotfix -> develop & master

**提交信息约定**

获取`源码提交关键字`操作可参考：http://blog.csdn.net/znyaiw/article/details/79212527

```
1. 功能分支：feature/功能点名称
需求：git commit -m "feat(功能点名称)：功能点描述 --story=[story id] --user=[usernick]"
任务：git commit -m "feat(功能点名称)：功能点描述 --task=[task id] --user=[usernick]"

2. 修复分支：hotfix/修复点名称
缺陷：git commit -m "fix(修复点名称)：修复点描述 --bug=[bug id] --user=[usernick]"

3. 需求、任务、缺陷本分支提交操作(以需求为例)
- Add(新增):
需求：git commit -m "feat(功能点名称)：[Add | A] 功能点新增描述 --story=[story id] --user=[usernick]"

- Update(更新):
需求：git commit -m "feat(功能点名称)：[Update | U] 功能点更新描述 --story=[story id] --user=[usernick]"

- Delete(删除):
需求：git commit -m "feat(功能点名称)：[Delete | D] 功能点删除描述 --story=[story id] --user=[usernick]"

- Rollback(回滚):
需求：git commit -m "feat(功能点名称)：[Rollback | R] 功能点回滚描述 --story=[story id] --user=[usernick]"
```