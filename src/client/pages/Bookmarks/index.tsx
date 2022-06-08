/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 16:07:55
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-28 20:40:56
 * @FilePath: /hooks-app/src/client/pages/Bookmarks/index.tsx
 * @Description: update here
 */
import React, { useState } from 'react'
import { observer } from 'mobx-react'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const Bookmarks = () => {
  return (
    <div>Bookmarks</div>
  );
};

export default () => <Bookmarks/>;