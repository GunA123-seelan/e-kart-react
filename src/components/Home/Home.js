import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import fi from './stor_3.jpg';
import se from './store_6.jpg';
import th from './stor_7.jpg';
const Home = () => {
  return (
    <>
    <h1>Welcome HOME</h1>
    <Carousel>
      <Carousel.Item interval={1000}>
      <img
            className="d-block w-100"
            src={fi}
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
            className="d-block w-100"
            src={se}
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-block w-100"
            src={th}
            alt="First slide"
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Home