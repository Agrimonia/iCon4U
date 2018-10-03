# iCon4U

## 简介

iCon4U 是一个 PowerPoint 加载项，用于向幻灯片中快速插入常用图标。

## 环境

- 确保安装了 PowerPoint 2016 for Windows10/MacOS
- 由于它基于 Office Web add-in，在使用过程中需要连接网络
- node.js

## 测试

1. 克隆这个项目： `git clone https://github.com/Agrimonia/iCon4U.git`
2. 进入项目目录，执行 `yarn` 安装依赖
3. `yarn start`
4. 如果 Terminal 显示 `webpack: Compiled successfullly.`, 那么现在你应该可以在浏览器上预览了，但要在 PowerPoint 上使用，你还需要根据自己的系统，按照[官方文档](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/test-debug-office-add-ins—)的步骤 Sideload 这个加载项
5. 正确执行之后，你应该可以在 PowerPoint 中使用了。

## 进度

- [x] 搜索
- [x] svg2base64
- [ ] 插入图标
- [ ] 三色
- [ ] 任意色
- [ ] 其他来源的图标
## 许可证

MIT License.
