import { Menu, Icon } from 'antd';
import React from 'react';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Nav extends React.Component {
  state = {
    current: 'article',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="article">
          <Icon type="article" />文章
        </Menu.Item>
        <Menu.Item key="about" >
          <Icon type="about" />关于
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;