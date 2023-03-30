import { ProFormColumnsType } from "@ant-design/pro-form";
import CATALOGUE_LIST from "../../../../../api/enumData/catalogue";

export const FORM_COUMNS: ProFormColumnsType<any, "text">[] = [
  {
    dataIndex: "label",
    title: "标题",
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    dataIndex: "belong",
    title: "书签类型",
    valueType: "select",
    fieldProps: {
      options: CATALOGUE_LIST[0].children.map((item) => ({
        label: item.label,
        value: item.key,
      })),
    },
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: "描述",
    dataIndex: "desc",
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
  {
    title: "书签地址",
    dataIndex: "link",
    formItemProps: {
      rules: [
        {
          required: true,
        },
      ],
    },
  },
];