import { Category } from '@prisma/client'

export const INFINITE_SCROLL_LIMIT = 8

export const ORDER_INFINITE_SCROLL_LIMIT = 3

export const categories: Category[] = [
  {
    name: 'Produtos',
    slug: 'skateboards',
  },
  {
    name: 'Roupas',
    slug: 'clothing',
  },
  {
    name: 'Sapatos',
    slug: 'shoes',
  },
  {
    name: 'Acessórios',
    slug: 'accessories',
  },
]
