import React from 'react'
import '../videosCard.css' 

const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>

const videosCard = ({image,name}) => {
  return (
    <div className='backgroundImage' style={{backgroundImage:`url(${image})`}}>
        <a href='#'>{playButton}</a>
        <p>{name}</p>
    </div>
  )
}

export default videosCard