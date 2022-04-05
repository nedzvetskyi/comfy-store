import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'
import {useCartContext}  from '../context/cart_context'

const AmountButtons = ({ cart, setCart, stock, id }) => {
    const {toggleAmount} = useCartContext()
  const increaseAmount = () => {
    if (cart.amount < stock) {
      setCart({ ...cart, amount: cart.amount + 1 })
      toggleAmount(id, 'inc')
    }
  }
  const decreaseAmount = () => {
    if (cart.amount > 1) {
      setCart({ ...cart, amount: cart.amount - 1 })
      toggleAmount(id, 'dec')
    }
  }

  return (
    <Wrapper className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decreaseAmount}>
        <FaMinus />
      </button>
      <h2 className='amount'>{cart.amount}</h2>
      <button type='button' className='amount-btn' onClick={increaseAmount}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`

export default AmountButtons