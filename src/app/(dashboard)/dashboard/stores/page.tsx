import Link from 'next/link'

import { Heading } from '@/components/Heading'
import { StoreCard } from '@/components/cards/StoreCard'
import { buttonVariants } from '@/components/ui/Button'
import { Separator } from '@/components/ui/Separator'
import { getAuthSession } from '@/lib/auth'
import prisma from '@/lib/db'

const StorePage = async () => {
  const session = await getAuthSession()

  const stores = await prisma.store.findMany({
    where: {
      userId: session?.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title='Lojas' description='Gerencie suas lojas' />
        {stores.length > 0 && (
          <Link className={buttonVariants()} href='/dashboard/stores/new'>
            Criar loja
          </Link>
        )}
      </div>
      <Separator className='my-4' />
      {stores.length > 0 ? (
        <section className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {stores.map((store) => (
            <StoreCard key={store.id} store={store!} />
          ))}
        </section>
      ) : (
        <section className='flex h-[50vh] text-center gap-4 flex-col items-center justify-center'>
          <h2 className='font-semibold text-2xl'>Você não tem nenhuma loja</h2>
          <Link className={buttonVariants()} href='/dashboard/stores/new'>
            Criar uma nova loja
          </Link>
        </section>
      )}
    </>
  )
}

export default StorePage
