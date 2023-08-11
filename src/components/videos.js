import React from 'react'
import VideosCard from './videosCard.js'
import "../styles/video.css"

const videos = ({videos}) => {
  return (
    <div className='videos'>
        {videos.map((item,index)=>(
            <VideosCard name={item.name} image={item.image} key={item.image}/>
        ))}
    </div>
  )
}

export default videos