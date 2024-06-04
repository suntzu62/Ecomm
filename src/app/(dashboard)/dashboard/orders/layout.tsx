import { Heading } from '@/components/Heading'
import { OrderTabs } from '@/components/pagers/OrdersTabs'

export default async function OrdersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Heading
        title='Pedidos'
        description='Veja seu histórico de transações'
        className='mb-8'
      />
      <section className='space-y-8 overflow-auto'>
        <OrderTabs />
        {children}
      </section>
    </>
  )
}
