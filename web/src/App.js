import React, { Component } from 'react';
import {Route,HashRouter,Link} from 'react-router-dom';
import './App.css';
import { Layout, Menu, Breadcrumb,BackTop  } from 'antd';
import Topic from './components/Topic.js'
import About from './components/About.js'
import Home from './components/Home'
import Article from './components/Article.js'
import 'antd/dist/antd.css'
const { Header, Content, Footer } = Layout;



class App extends Component {
  render() {
    return (
      <HashRouter> 
      <Layout className="layout">
      <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
      <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
      <Menu.Item key="2"><Link to='/topic'>博客</Link></Menu.Item>
      <Menu.Item key="3"><Link to='/about'>关于</Link></Menu.Item>
      </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Topic</Breadcrumb.Item>
          <Breadcrumb.Item>Article</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 760  }}>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topic" component={Topic}/>
          <Route path="/article/:id" component={Article}/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
      ©2018 Created by LXF
      </Footer>
      <BackTop />
      </Layout>
      </HashRouter>
      );
  }
}

export default App;




