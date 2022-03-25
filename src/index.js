//1、引入React两个核心模块
import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import 'lib-flexible';
import App from './App'


//2、通过JSX语法将组件/标签渲染到指定标签上

ReactDOM.render(
  <App />
  , document.getElementById('root'));


