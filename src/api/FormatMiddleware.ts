/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 14:19:05
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 14:19:17
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/api/FormatMiddleware.ts
 * @Description: update here
 */
import { IMiddleware } from '@midwayjs/core';
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class FormatMiddleware implements IMiddleware<Context, NextFunction> {

  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const result = await next();
      return {
        code: 0,
        msg: '',
        data: result,
        success: true
      }
    };
  }

  match(ctx) {
    return ctx.path.indexOf('/api') !== -1;
  }
}