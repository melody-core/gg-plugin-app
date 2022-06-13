

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
}]