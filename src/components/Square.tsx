import React from 'react'
import { IsSquare } from '../interface'

interface SquareProps {
  value: IsSquare
  onClick: () => void
}


function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square
