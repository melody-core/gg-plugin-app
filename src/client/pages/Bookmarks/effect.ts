/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 17:32:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 17:45:29
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/pages/Bookmarks/effect.ts
 * @Description: update here
 */


import { useState, useEffect } from "react";


export const useBookMarkList = (getTableData) => {
  useEffect(getTableData, [])
}

export const useFormContrulor = () => {
  const [showForm, setShowForm] = useState(false);
  const [initValues, setInitValues] = useState<Record<string, any>>();
  const formContrulor = (isShow?: boolean, value?: Record<string, any>)=> {    
    setInitValues(value);
    setShowForm(isShow || false);
  }
  return {
    showForm,
    formContrulor,
    initValues
  }
}