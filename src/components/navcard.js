import React from 'react'

const navcard = ({name,image,price}) => {
  return (
   
    <div className="NavCard" >
    <img src={image} alt={`${image} phone`} />
    <p>{name}</p>
    <span>{price}</span>
</div>
  )
}

export default navcard