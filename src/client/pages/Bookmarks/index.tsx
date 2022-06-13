/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 16:07:55
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-13 11:26:57
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/pages/Bookmarks/index.tsx
 * @Description: update here
 */
import { ProFormRadio, ProList } from '@ant-design/pro-components';
import React, { FC } from 'react';
import { observer } from 'mobx-react';
import CATALOGUE_LIST from '../../../api/enumData/catalogue'
import { useBookMarkList } from './effect';
import catalogueStore from './../../store/catalogue';
import type { BookmarksProps } from './type'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';


export const Bookmarks: FC<BookmarksProps> = observer(({ store: {
  bookmarks: {
    selectedKeys,
    bookmarkList,
  },
  setSelectedKeys,
  updateBookmarkList
}}) => {
  useBookMarkList(updateBookmarkList);
  const navigate = useNavigate()
  return (
    <div
      className={styles['bookmarks-wrap']}
    >
      <ProFormRadio.Group
        label="书签类型"
        options={CATALOGUE_LIST[0].children.map(item=>({label: item.label, value: item.key}))}
        fieldProps={{
          value: selectedKeys[0],
          onChange: e => {
            setSelectedKeys(e.target.value)
            navigate(`/catalogue/bookmarks?key=${e.target.value}`)
          }
        }}
      />
      <div>
      <ProList<any>
        showActions="always"
        toolBarRender={() => {
          return [
            <Button key="3" type="primary" onClick={()=>{console.log('xinjian')}}>
              新建
            </Button>,
          ];
        }}
        // search={{
        // }}
        onReset = {updateBookmarkList}
        onSubmit ={updateBookmarkList}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        onItem={(record: any) => {
          return {
            onClick: () => {
              record.link && window.open(record.link)
            },
          };
        }}
        metas={{
          title: {
            dataIndex: 'label',
            title: "书签名"
          },
          subTitle: {
            search: false
          },
          type: {
            search: false
          },
          avatar: {
            search: false
          },
          content: {
            title: "备注",
            dataIndex: "desc"
          },
          actions: {
          },
        }}
        headerTitle="书签列表"
        dataSource={(bookmarkList||[]).map(item => ({
          ...item,
          // title: item.label,
          actions: [<a key="run">编辑</a>, <a key="delete">删除</a>],
          avatar: item.imgSrc || 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
          // content: item.desc
        }))}
      />
      </div>
    </div>
  );
});


export default ()=><Bookmarks store={catalogueStore}/>