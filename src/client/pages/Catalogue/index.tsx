/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 22:02:33
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-13 09:56:50
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/pages/Catalogue/index.tsx
 * @Description: update here
 */

import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { observer } from 'mobx-react';

import CATALOGUE_LIST from '../../../enumData/catalogue'
import { useSelectedKeys } from './effect'
import catalogueStore from './../../store/catalogue';
import { Outlet, useNavigate } from 'react-router-dom'

import type { CatalogueProps } from './type'

import styles from './index.module.css';

const { Header, Sider, Content } = Layout;

export const Catalogue: FC<CatalogueProps> = observer(({ store: {
  bookmarks: {
    selectedKeys,
  },
  setSelectedKeys
}}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  return (
    <Layout className={styles['catalogue-wrap']}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          style={{height: '100%'}}
          mode="inline"
          defaultOpenKeys={[CATALOGUE_LIST[0].key]}
          selectedKeys={selectedKeys}
          items={CATALOGUE_LIST.filter(item => item.options.configurable !== -1)}
          onClick={item => {
            setSelectedKeys(item.key)
            if(item.key.includes('BOOK_MARK')){
              navigate(`/catalogue/bookmarks?key=${item.key}`)
            }
          }}
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
            paddingBottom: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
});

export default ()=><Catalogue store={catalogueStore}/>