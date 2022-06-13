/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 16:00:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 15:19:16
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/router/config.ts
 * @Description: update here
 */

import UserList from '../pages/user/userList'
import Catalogue from '../pages/Catalogue'
import Bookmarks from '../pages/Bookmarks'
import App from '../../App'
import Page404 from '../pages/Status/404'


export default [{
  path: '/',
  Component: App,
  children: [{
    path: 'catalogue',
    Component: Catalogue,
    bread: ['谷歌助手', '功能管理中心'],
    children: [{
      path: 'bookmarks',
      Component: Bookmarks,
      bread: ['谷歌助手', '功能管理中心', '工作书签'],
    }, {
      path: '',
      Component: Bookmarks,
      bread: ['谷歌助手', '功能管理中心', '工作书签'],
    }]
  }, {
    path: '',
    Component: Catalogue,
    bread: ['谷歌助手', '功能管理中心'],
    children: [{
      path: '',
      Component: Bookmarks,
      bread: ['谷歌助手', '功能管理中心', '工作书签'],
    }]
  }, {
    path: '*',
    Component: Page404,
  }]
}]