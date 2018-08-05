import React, { Component } from 'react';
import { Icon } from 'antd';


class About extends Component {
  render() {
    return (
      <div>
      	<p>该博客是lxf于2018.8.6写的一个练习项目。</p>
      	<p>使用的技术栈是koa + react V16.4。</p>
      	<p>此外还使用了antd组件库，react-router V4 路由，marked插件库把markdown文本渲染成html，axios做ajax请求。</p>
      	<p>github : <a href='https://github.com/a1092297797/react-koa-website'><Icon type="github" /></a></p>
      </div>
    );
  }
}

export default About;