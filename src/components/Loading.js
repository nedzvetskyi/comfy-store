import React from 'react'
import spinner from '../assets/spinner.gif'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper>
      <img src={spinner} alt='spinner' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default Loading
