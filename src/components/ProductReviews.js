import React from 'react'
import ProductReviewsCard from './ProductReviewsCard.js'

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>
        {ProductReviews.map((item,index)=>(
            <ProductReviewsCard key={item.image} src={item.image} review={item.review} name={item.name} price={item.price} index={index}/>
        ))}
    </div>
  )
}

export default ProductReviews