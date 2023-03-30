/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 16:04:43
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-13 11:27:31
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/store/catalogue.ts
 * @Description: update here
 */
import { makeAutoObservable } from "mobx";
import CATALOGUE_LIST from "../../api/enumData/catalogue";
import { getBookmarkDataSource } from "./../../api/catalogue";

const getURLParams: () => string = () => {
  const searchParams = new window.URLSearchParams(location.search);
  let res;
  searchParams.forEach((v, k) => {
    if (k === "key") {
      res = v;
    }
  });
  return res || CATALOGUE_LIST[0].children[0].key;
};

export class CatalogueStoreConstructor {
  bookmarks = {
    selectedKeys: [getURLParams()],
    bookmarkList: [],
  };
  setSelectedKeys = (key) => {
    this.bookmarks = {
      ...this.bookmarks,
      selectedKeys: [key],
    };
    this.updateBookmarkList({
      belong: key,
    });
  };
  updateBookmarkList = (params?: Record<any, any>) => {
    getBookmarkDataSource({
      query: {
        belong: this.bookmarks.selectedKeys[0],
        ...(params || {}),
      },
    }).then((res: Record<any, any>) => {
      const { data = [] } = res || {};
      this.bookmarks = {
        ...this.bookmarks,
        bookmarkList: data,
      };
    });
  };
  constructor() {
    makeAutoObservable(this);
  }
}

export default new CatalogueStoreConstructor();
