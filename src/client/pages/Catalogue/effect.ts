/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 14:25:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-13 11:27:55
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/pages/Catalogue/effect.ts
 * @Description: update here
 */

import { useState } from "react";
import { useSearchParams, useNavigate } from 'react-router-dom';
import CATALOGUE_LIST from '../../../api/enumData/catalogue';


export const useSelectedKeys = () => {
  const params = useSearchParams();
  const navigate = useNavigate();
  let defaultKey = ''
  params[0].forEach((v, key) => {
    if(key === 'key'){
      defaultKey = v;
    }
  })
  const [ selectedKeys, setSelectedKeys ] = useState([defaultKey || CATALOGUE_LIST[0].children[0].key]);
  const handleMenuItemClick = (item) => {
    setSelectedKeys([item.key]);
    // 工作书签路由
    if(item.key.includes('BOOK_MARK')){
      navigate(`/catalogue/bookmarks?key=${item.key}`)
    }
    // navigate(`/catalogue?key=${item.key}`)
  }
  return {
    selectedKeys,
    handleMenuItemClick
  }
}