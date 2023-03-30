
import { message } from "antd";

export const xFetch = async <T>(
  p: Promise<T>
): Promise<{
  success: boolean;
  data: T;
  msg?: string;
  code: number;
}> => {
  try {
    const result = await p;
    const { success = false, msg, code, data } = (result || {}) as any;
    if (!success) {
      message.error(msg || "接口异常!");
    }
    return {
      success,
      msg,
      code,
      data,
    };
  } catch (error) {
    message.error("服务异常!");
    console.error("error:", error);
    return {
      success: false,
      msg: "",
      code: 500,
      data: null,
    };
  }
};