import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const cataloguedata: Prisma.CatalogueCreateInput[] = [{
  label: '钱江dev',
  belong: 'BOOK_MARK_0-0-1',
  link: 'http://dev.eimos.com/pro/portal/home',
  roles: '*',
  desc: '钱江用户-dev环境-办公系统'
},{
  label: '钱江uat',
  belong: 'BOOK_MARK_0-0-1',
  roles: '*',
  link: 'http://uat.eimos.com/pro/portal/home',
  desc: '钱江用户-dev环境-办公系统'
},{
  label: '钱江线上',
  belong: 'BOOK_MARK_0-0-1',
  roles: '*',
  link: 'http://eimos.qre.cn/',
  desc: '钱江用户-dev环境-办公系统'
},{
  label: '雪蕾dev',
  belong: 'BOOK_MARK_0-0-1',
  roles: '*',
  link: 'http://dev.xuelei.com/pro/portal/home',
  desc: '钱江用户-dev环境-办公系统'
},{
  label: '雪蕾uat',
  belong: 'BOOK_MARK_0-0-1',
  roles: '*',
  link: 'http://uat.xuelei.com/pro/portal/home',
  desc: '钱江用户-dev环境-办公系统'
}];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of cataloguedata) {
    const user = await prisma.catalogue.create({
      data: u,
    });
    console.log(`创建了新的功能-id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });