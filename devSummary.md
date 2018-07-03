> 以下是个人开发纪要，仅供个人参考。

### 1. parcel 安装与运行
#### 1.1 parcel 安装
```
    npm i -D parcel-bundler
```
> install 过程中会出现一些模块无法正常安装，如vue-template-compiler， @vue/component-compiler-utils 等，可手动使用 npm i 单独安装模块。（折腾许久）

#### 1.2 parcel 运行
```
    ./node_modules/.bin/parcel --no-cache
```
等价于
```
    npx parcel --no-cache
```

### 2. 组件传参
#### 2.1 父传子
> 子组件使用 props 接收，注意一点，如参数名为驼峰式命名（iconPosition)，父组件的属性应用中横线 - 分隔(icon-position)。

### 3. CSS 相关
#### 3.1 inline-flex 导致的对齐问题
```
    vertical-align: top;
```