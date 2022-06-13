/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 10:17:13
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-13 11:26:32
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/api/catalogue.ts
 * @Description: update here
 */


import { Api, Get, Post, Query, useContext, Validate } from '@midwayjs/hooks';
import { z } from 'zod';
import CATALOGUE_LIST from './enumData/catalogue';
import { prisma } from './prisma'

export const getCatalogues = Api(
  Get('/api/catalogue/getAllCatalogueList'),
  async () => {
    return CATALOGUE_LIST;
  }
);


// 工作书签
export const getBookmarkDataSource = Api(
  Get('/api/catalogue/getBookmarkList'),
  Query<{
    belong?: string;
    role?: string;
    [key: string]: string
  }>(),
  async () => {
    const ctx = useContext();
    const params =  {...ctx.query }
    console.log('params', params)
    const res = await prisma.catalogue.findMany({
        where: params
    })
    return res;
  }
);
