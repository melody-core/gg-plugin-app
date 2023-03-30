import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const cataloguedata: Prisma.CatalogueCreateInput[] = [{
  label: '百度',
  belong: 'BOOK_MARK_0-0-1',
  link: 'https://www.baidu.com',
  roles: '*',
  desc: '百度啊'
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