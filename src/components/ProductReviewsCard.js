import React from 'react'
import "../styles/ProductReviewsCard.css"

const ProductReviewsCard = ({src, name ,index , price , review}) => {
  return (
    <div className='ProductReviewsCard'>
        <div className="cardimage"><img src={src} alt={`${index} Review`} /></div>
        <div className='content'>
            <h3>{review}</h3>
            <section>
                <h4>{name}</h4>
                <p>{price}</p>
            </section>
        </div>

    </div>
  )
}

export default ProductReviewsCard