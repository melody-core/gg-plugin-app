/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 16:00:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-06 17:06:41
 * @FilePath: /hooks-app/src/client/router/config.ts
 * @Description: update here
 */

import UserList from '../pages/user/userList'
import Catalogue from '../pages/Catalogue'
import App from '../../App'
import Page404 from '../pages/Status/404'


export default [{
  path: '/',
  Component: App,
  children: [{
    path: 'userlist',
    Component: UserList,
    bread: ['谷歌助手', '用户管理中心'],
  }, {
    path: 'catalogue',
    Component: Catalogue,
    bread: ['谷歌助手', '功能管理中心'],
  }, {
    path: '',
    Component: Catalogue,
    bread: ['谷歌助手', '功能管理中心'],
  }, {
    path: '*',
    Component: Page404,
  }]
}]