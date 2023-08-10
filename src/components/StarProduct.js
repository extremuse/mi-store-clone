import React from 'react'
import '../styles/StarProduct.css'

const StarProduct = ({starProduct}) => {
  return (
    <div className='StarProduct'>
        <div className='left'><a href={starProduct[0].url}><img src={starProduct[0].image} alt="1st product"/></a></div>
        <div className='right'>
            <div className='right-upper'>
            <a href={starProduct[1].url}><img src={starProduct[1].image} alt="1st product"/></a>
            <a href={starProduct[2].url}><img src={starProduct[2].image} alt="1st product"/></a>
            </div>
            <div className='right-bottom'>
            <a href={starProduct[3].url}><img src={starProduct[3].image} alt="1st product"/></a>
            </div>
        </div>
    </div>
    
  )
}

export default StarProduct