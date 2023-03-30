import React, { FC } from "react";
import { BetaSchemaForm } from "@ant-design/pro-components";
import { FORM_COUMNS } from "./effect";
import { BaseFormProps } from "./type";

export const BaseForm: FC<BaseFormProps> = ({ initValues, onFinish, onCancel }) => {
  return (
    <BetaSchemaForm
      columns={FORM_COUMNS}
      onFinish={onFinish}
      layoutType="ModalForm"
      visible
      initialValues={initValues}
      modalProps={{
        onCancel
      }}
    />
  );
};
