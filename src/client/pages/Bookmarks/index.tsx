/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 16:07:55
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-13 11:26:57
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/pages/Bookmarks/index.tsx
 * @Description: update here
 */
import { ProFormRadio, ProList } from "@ant-design/pro-components";
import React, { FC } from "react";
import { observer } from "mobx-react";
import CATALOGUE_LIST from "../../../api/enumData/catalogue";
import { useBookMarkList, useFormContrulor } from "./effect";
import catalogueStore from "./../../store/catalogue";
import type { BookmarksProps } from "./type";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { Button, message, Popconfirm } from "antd";
import { BaseForm } from "./components";
import { xFetch } from "../../libs";
import { createBookMark, deleteBookMark, updateBookMark } from "../../../api/catalogue";

export const Bookmarks: FC<BookmarksProps> = observer(
  ({
    store: {
      bookmarks: { selectedKeys, bookmarkList },
      setSelectedKeys,
      updateBookmarkList,
    },
  }) => {
    useBookMarkList(updateBookmarkList);
    const navigate = useNavigate();
    const { showForm, formContrulor, initValues } = useFormContrulor();
    console.log("showForm", showForm);
    return (
      <div className={styles["bookmarks-wrap"]}>
        <ProFormRadio.Group
          label="书签类型"
          options={CATALOGUE_LIST[0].children.map((item) => ({
            label: item.label,
            value: item.key,
          }))}
          fieldProps={{
            value: selectedKeys[0],
            onChange: (e) => {
              setSelectedKeys(e.target.value);
              navigate(`/catalogue/bookmarks?key=${e.target.value}`);
            },
          }}
        />
        <div>
          <ProList<any>
            showActions="always"
            toolBarRender={() => {
              return [
                <Button
                  key="3"
                  type="primary"
                  onClick={() => {
                    formContrulor(true);
                  }}
                >
                  新建
                </Button>,
              ];
            }}
            // search={{
            // }}
            onReset={updateBookmarkList}
            onSubmit={updateBookmarkList}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
            }}
            onItem={(record: any) => {
              return {
                onClick: () => {
                  record.link && window.open(record.link);
                },
              };
            }}
            metas={{
              title: {
                dataIndex: "label",
                title: "书签名",
              },
              subTitle: {
                search: false,
              },
              type: {
                search: false,
              },
              avatar: {
                search: false,
              },
              content: {
                title: "备注",
                dataIndex: "desc",
              },
              actions: {},
            }}
            headerTitle="书签列表"
            dataSource={(bookmarkList || []).map((item) => ({
              ...item,
              // title: item.label,
              actions: [
                <a key="run" onClick={() => formContrulor(true, item)}>
                  编辑
                </a>,
                <Popconfirm
                  title="确认删除吗"
                  onConfirm={() =>
                    xFetch(deleteBookMark({ id: item.id })).then(
                      ()=>updateBookmarkList()
                    )
                  }
                >
                  <a key="delete">删除</a>
                </Popconfirm>,
              ],
              avatar:
                item.imgSrc ||
                "https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg",
              // content: item.desc
            }))}
          />
        </div>
        {showForm && (
          <BaseForm
            onFinish={async (v) => {
              if (!initValues) {
                const res = await xFetch(createBookMark(v));
                const { success } = res || {};
                if (success) {
                  message.success("创建成功！");
                  formContrulor();
                }
              }else{
                const res = await xFetch(updateBookMark({
                  ...v,
                  id: initValues.id
                }));
                const { success } = res || {};
                if (success) {
                  message.success("更新成功！");
                  formContrulor();
                }
              }
              updateBookmarkList()
            }}
            initValues={initValues}
            onCancel={() => formContrulor(false)}
          />
        )}
      </div>
    );
  }
);

export default () => <Bookmarks store={catalogueStore} />;
