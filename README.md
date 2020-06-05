# zzy-vue-full-screen

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# npm i 
找到 lib-flexible包中的flexible.js
修改 refreshRem()函数为
var width = docEl.getBoundingClientRect().width;
        var height = docEl.getBoundingClientRect().height;
        n = width / height
        e = 16 / 9
        var rem = (n > e ? e / n : 1) * width / 10;
        // if (width / dpr > 540) {
        //     width = 540 * dpr;
        // }
        // var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
保存 运行
