import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

export default class Nav extends Component {
  state = {
    current: 'app',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="app" >
          <Icon type="dashboard" />
          Dashboard
        </Menu.Item>
        <Menu.Item key="help">
          <Icon type="customer-service" />
          Help 
        </Menu.Item>
        <Menu.Item key="settings" >
          <Icon type="setting" />
          Settings
        </Menu.Item>
      </Menu>
    );
  }
}

