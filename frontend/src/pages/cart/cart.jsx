import { useChangeTitle } from '@hooks'

const CartPage = () => {
  useChangeTitle('Корзина')

  return (
    <>
      <h1>Корзина</h1>
    </>
  )
}

export default CartPage
