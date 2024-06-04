const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const skateboards = await prisma.category.create({
    data: {
      name: 'Produtos',
      slug: 'skateboards',
    },
  })
  const clothing = await prisma.category.create({
    data: {
      name: 'Roupas',
      slug: 'clothing',
    },
  })
  const shoes = await prisma.category.create({
    data: {
      name: 'Sapatos',
      slug: 'shoes',
    },
  })
  const accessories = await prisma.category.create({
    data: {
      name: 'Acessórios',
      slug: 'accessories',
    },
  })

  console.log({ skateboards, clothing, shoes, accessories })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
