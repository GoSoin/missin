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

**版本更新记录**

**约定**

server端口：3xxx

client端口：4xxx或9xxx