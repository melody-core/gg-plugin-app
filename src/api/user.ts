/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 17:42:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-08 01:05:32
 * @FilePath: /hooks-app/src/api/user.ts
 * @Description: update here
 */
import { Api, Get, useContext, Post, Validate, useInject } from '@midwayjs/hooks';
import type { Context } from '@midwayjs/koa';
import { Body } from "@midwayjs/decorator";
import { z } from 'zod';
import { prisma } from './prisma';


let count = 1;
 
export const login = Api(
  Post('/api/user/login'),
  Validate(z.object({
    name: z.string(),
    password: z.string()
  })),
  async ({name, password}) => {
    console.log('name, password1', name, password);
    const ctx = useContext<Context>();
    const { userId } = ctx.session;
    // const userModel: ReturnModelType<typeof User> =  await useInject(
    //   User
    // )
    const result = await prisma.user.create({
      data: {
        name,
        lv: 8,
        email: '18210711176@163.com',
        role: 1,
        password: 'xxx'
      },
    });
    return result;
    if(userId){
      // todo 从userId取
      // console.log('userId', userId);
      
    }else{
      // console.log('name, password', name, password);
    }
    // session处理

    return count;
  }
)

export const getUsers = Api(
  Get('/api/user'),
  async () => {
    const ctx = useContext<Context>();
    console.log('ctx.session', ctx.session)
    return [];
  }
);
