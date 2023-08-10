import React from 'react'
import OfferCard from './OfferCard.js'
import '../styles/Offer.css'

const Offer = ({offer}) => {
  return (
    <div className='offerSection'>
        {offer.map((item,index)=>(
            <OfferCard key={item.image} index={index} src={item.image} link={item.url} lin/>
        ))}
    </div>

  )
}

export default Offer