# 使用 webpack 搭建一个 react

# step 1

#安装 npm init -y

# 安装 webpack webpack-cli webpack-dev-server -D

添加 "dev"/"start"/"build"
"webpack --mode development "
"webpack-dev-server --mode development --open --line --hot"
"webpack --mode production"

添加 webpack.config.js

# step 2

# 安装 react react-dom

添加入口文件 './src/index.js',
添加入口模板 './public/index.html'

# step 3

# 安装 babel-loader @babel/core -D

# 安装 es6 转 es5 ,解析 jsx : @babel/preset-env (转 es5), @babel/preset-react (解析 jsx)

# 添加 .babelrc

{
"presets":["@babel/preset-env","@babel/preset-react"]
}

# 添加 html-webpack-plugin 插件

const HtmlWebpackPlugin = require('html-webpack-plugin');

# 添加样式依赖 node-sass sass-loader css-loader style-loader

# 继续编写 webpack.config.js

# 添加 devServer

devServer:{
port:'8888',
host:'localhost',
hot:true
}

# 执行 yarn start 页面就可以跑起来了！

# 依赖汇总

1.webpack webpack-cli webpack-dev-server
2.react react-dom  
3.babel-loader @babel/core @babel/preset-env @babel/preset-react (babel 转 ES5,jsx 解析)
5.html-loader html-webpack-plugin (webpack 插件)
4.node-sass sass-loader css-loader style-loader (样式的 loader)
