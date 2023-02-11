import React from "react";
// import Carousel from "react-multi-carousel";
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Banner.css';



const Banner = () => {
    return (
        <>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 crousalimage"
          src="https://rukminim1.flixcart.com/flap/700/300/image/b0e088ff138c58be.jpg?q=90"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 crousalimage"
          src="https://rukminim1.flixcart.com/flap/700/300/image/aebf043a3a4f15d6.jpg?q=90"
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 crousalimage"
          src="https://rukminim1.flixcart.com/flap/700/300/image/c16af8723f41e655.jpeg?q=90"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
        </>
    )
}

export default Banner;