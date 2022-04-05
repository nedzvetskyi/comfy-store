import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className='empty'>
      <h2>Your cart is empty</h2>
      <Link className='btn' to='/products'>
        fill it
      </Link>
    </div>
  )
}

export default CartEmpty
