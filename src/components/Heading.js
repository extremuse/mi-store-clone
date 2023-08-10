import React from 'react'
import '../styles/heading.css'

const Heading = ({text}) => {
  return (
    <div className='heading'>
        <div className='blank'></div>
        <div className='text'>{text}</div>
        <div className='blank'></div>
    </div>
  )
}

export default Heading