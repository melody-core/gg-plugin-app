/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 17:01:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-07 17:21:00
 * @FilePath: /hooks-app/src/client/store/user.ts
 * @Description: update here
 */
import { observable, action } from "mobx"

class user{
  @observable userinfo = {
  };
  @observable isLogin = false
  // @action.bound
  // setCount(){
  //   this.count ++;
  // }
}

export default new user();