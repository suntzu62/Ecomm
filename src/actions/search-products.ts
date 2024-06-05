'use server'

import { categories } from '@/config'
import prisma from '@/lib/db'
import { SearchProducts } from '@/types/search-products'

interface Product {
  id: number;
  storeId: number;
  name: string;
  slug: string;
  categoryId?: string | null;
}

type ProductsByCategory = {
  category: string;
  products: Product[];
};
const searchProducts = async (query: string): Promise<SearchProducts[]> => {
  const filteredProducts = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
      },
    },
    select: {
      id: true,
      storeId: true,
      name: true,
      slug: true,
      categoryId: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
  })

  const productsByCategory = categories.map((category) => ({
    category: category.name,
    products: filteredProducts
   .filter(
      (product) => product.categoryId === category.slug && product.categoryId!== null
    )
   .map(product => ({
     ...product,
      categoryId: product.categoryId || '',
    })),
  }))

  return productsByCategory
}

export default searchProducts
