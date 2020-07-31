import React from 'react'
import styled from 'styled-components'
const Button = styled.button`
  outline: none;
  border: 0;
`
export default props => {
  return (
    <Button onClick={props.onClick}>
      {props.children}
    </Button>
  )
}