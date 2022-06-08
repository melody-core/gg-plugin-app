/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 16:46:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-06 17:12:21
 * @FilePath: /hooks-app/src/App.tsx
 * @Description: update here
 */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import NavConfig from './client/config/nav.config';
import UserIcon from './client/components/UserIcon';

import 'antd/dist/antd.css';
import './index.css';


import styles from './index.module.css';

const { Header, Footer } = Layout;

const App = () => {
  const navigate = useNavigate();
  return (
    <Layout className="app-wrap">
      <Header className={styles['flex-wrap']}>
        <div className={styles["logo"]} />
        <Menu
          className={styles['flex-1']}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[NavConfig[0].key]}
          items={NavConfig}
          onClick={({key}) => { navigate(NavConfig.find(item => item.key === key)?.to) }}
        />
        <UserIcon />
      </Header>
      <Outlet />
      <Footer
        className={styles['footer-wrap']}
      >
        办公神器-谷歌助手-后台@2022
      </Footer>
    </Layout>
  );
}

export default App;
