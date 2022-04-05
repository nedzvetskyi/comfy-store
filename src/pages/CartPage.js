import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { CartContent, PageHero } from '../components'
import CartEmpty from '../components/CartEmpty'

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length === 0) {
    return (
      <main>
        <PageHero title='cart' />
        <Wrapper className='page'>
          <CartEmpty />
        </Wrapper>
      </main>
    )
  }
  return (
    <main>
      <PageHero title='cart' />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`

export default CartPage
