/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 22:02:33
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-06 15:16:06
 * @FilePath: /hooks-app/src/client/pages/Catalogue/index.tsx
 * @Description: update here
 */

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';


import styles from './index.module.css';

const { Header, Sider, Content } = Layout;

const Catalogue = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className={styles['catalogue-wrap']}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          style={{height: '100%'}}
          mode="vertical"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: '#fff'
          }}
        >
          {
            collapsed ? (
              <MenuUnfoldOutlined  
                className={styles['trigger']}
                onClick = {() => setCollapsed(!collapsed)}
              />) : (
              <MenuFoldOutlined 
                className={styles['trigger']}
                onClick = {() => setCollapsed(!collapsed)}
              />)
          }
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Catalogue;