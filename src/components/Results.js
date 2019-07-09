import React, { Component } from 'react';
import { Avatar, Table, Divider, Tag } from 'antd';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    name: record.name,
  }),
};

const columns = [
  {
    title: 'Profile Image',
    dataIndex: 'imgUrl',
    render: link => <Avatar src={link} />
  },
  {
    title: 'Name',
    dataIndex: 'fullName',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {
          tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'private') {
              color = 'volcano';
            } else if(tag === 'public'){
              color = 'green';
            } else if(tag === 'verified') {
              color = 'geekblue';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })
        }
      </span>
    )
  }
];

export default class Result extends Component {


  render() {
    return(
      <div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.searchResults} />
      </div>
    );
  }
}
