/*
 * @Author: xinyu_wang06 xinyu.wang06@mihoyo.com
 * @Date: 2023-03-24 18:33:08
 * @LastEditors: xinyu_wang06 xinyu.wang06@mihoyo.com
 * @LastEditTime: 2023-03-30 14:01:29
 * @FilePath: \mihoyo-infosys-design-axuree:\gitlab\wlb\gg-plugin-app\src\api\enumData\catalogue.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


export default [{
  "title": "工作链接书签集合",
  "key": "BOOK_MARK_0-0",
  "label": "工作链接书签集合",
  "type": "link-blank",
  "options": {
    "config": "",
    "linkto": "http://localhost:3000/catalogue/bookmarks"
  },
  "children": [{
    "title": "公司工作通用书签",
    "label": "公司工作通用书签",
    "type": "link-blank",
    "options": {
      "config": "",
      "linkto": "http://localhost:3000/catalogue/bookmarks?key=BOOK_MARK_0-0-1"
    },
    "key": "BOOK_MARK_0-0-1"
  }, {
    "title": "前端工作通用书签",
    "label": "前端工作通用书签",
    "type": "link-blank",
    "options": {
      "config": "",
      "linkto": "http://localhost:3000/catalogue/bookmarks?key=BOOK_MARK_0-0-2"
    },
    "key": "BOOK_MARK_0-0-2",
  }, {
    "title": "自定义工作书签",
    "label": "自定义工作书签",
    "type": "link-blank",
    "options": {
      "config": "",
      "linkto": "http://localhost:3000/catalogue/bookmarks?key=BOOK_MARK_0-0-3"
    },
    "key": "BOOK_MARK_0-0-3"  
  }]
}, {
  "title": "版本切换功能",
  "label": "版本切换功能",
  "type": "form-modal",
  "options": {
    "config": "CHANGE_VERSION",
    "configurable": -1
  },
  "key": "CHANGE_VERSION"  
}, {
  "title": "页面性能检测",
  "label": "页面性能检测",
  "type": "form-modal",
  "options": {
    "config": "PAGE_PERFORMANCE",
    "configurable": -1
  },
  "key": "PAGE_PERFORMANCE"  
}]