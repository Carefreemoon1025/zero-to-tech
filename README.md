# zero-to-tech

从零到技术：我的第一个网页。用 HTML / CSS / JavaScript 三个文件搭出的最小可运行前端项目。

## 文件结构

```
zero-to-tech/
├── index.html   # 页面结构：一张卡片 + 一个按钮
├── style.css    # 样式：Flex 居中布局、卡片阴影、按钮悬停态
└── script.js    # 交互：点击按钮切换文案
```

## 本地运行

不需要构建工具，直接用浏览器打开 `index.html` 即可。或者起一个静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 涉及的知识点

| 文件 | 知识点 |
| --- | --- |
| `index.html` | 文档结构、`<link>` 引入外部样式、`onclick` 绑定事件 |
| `style.css` | 选择器、盒模型、Flexbox 居中、`:hover` 伪类 |
| `script.js` | 函数定义、`document.getElementById`、DOM 文本修改 |

## 后续计划

- [ ] 用 `addEventListener` 替代 `onclick` 属性绑定
- [ ] 增加表单输入，实现双向交互
- [ ] 学习 Git 分支与 Pull Request 流程
