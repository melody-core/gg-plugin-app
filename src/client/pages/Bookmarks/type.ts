/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 16:16:20
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 16:16:20
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/pages/Bookmarks/type.ts
 * @Description: update here
 */
import catalogueStore from './../../store/catalogue';

export type CatalogueStore = typeof catalogueStore;


export interface BookmarksProps{
  store: CatalogueStore
}