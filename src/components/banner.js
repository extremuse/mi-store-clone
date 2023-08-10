import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export const banner = ({banner}) => {
  return (
    <Carousel fade>

        {
            banner.end.map((item , index)=>(
                <Carousel.Item key={item.image} id="banner" interval={2000}>
                    <img src={item.image} id="bannerImage"alt={`${index} banner`} />
                <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read more`</u>
                </Carousel.Caption>
            </Carousel.Item>
            ))
        }
    </Carousel>
  )
}

export default banner
