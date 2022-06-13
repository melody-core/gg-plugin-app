/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 16:31:28
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 16:31:28
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/pages/Catalogue/type.ts
 * @Description: update here
 */
import catalogueStore from './../../store/catalogue';

export type CatalogueStore = typeof catalogueStore;


export interface CatalogueProps{
  store: CatalogueStore
}