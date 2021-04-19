# vue3

vuejs / [docs-next-zh-cn](https://github.com/vuejs/docs-next-zh-cn)

## VuePress

該站點基於 `Vuepress` 構建而成。網站內容在 `docs` 文件夾內，格式為 `Markdown`

[VuePress](https://vuepress.vuejs.org/)
[getting-started](https://vuepress.vuejs.org/zh/guide/getting-started.html)

`yarn init`  
`yarn add -D vuepress` 

docs\vue.js> `yarn s`  
success Generated static files in `docs\.vuepress\dist.`  

docs\vue.js> `yarn g`  
docs\vue.js> `yarn d`

[basic-config](https://vuepress.vuejs.org/zh/guide/basic-config.html)

```js
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```