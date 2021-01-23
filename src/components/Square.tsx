import React from 'react'
import { IsSquare } from '../interface'

interface SquareProps {
  value: IsSquare
  onClick: () => void
}


const Square: React.FC<SquareProps> = ({ onClick, value }) => {
  // const { onClick, value } = props
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
