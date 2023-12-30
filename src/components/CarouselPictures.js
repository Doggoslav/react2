import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselPictures.css"
import carouselpic1 from "./carouselpic1.png";
import carouselpic2 from "./carouselpic2.png";
import carouselpic3 from "./carouselpic3.png";

function CarouselPictures() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${carouselpic1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '600px'
          }}
        ></div>
        <Carousel.Caption className='custom-caption'>
          <h3>The largest pattern guide website (hope so)</h3>
          <p>The most complete database of CS2 skins with unique patterns.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${carouselpic2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '600px'
          }}
        ></div>
        <Carousel.Caption className='custom-caption'>
          <h3>Explore through all the rare pattern skins</h3>
          <p>Patterns of all weapons, knives, and gloves.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundImage: `url(${carouselpic3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '600px'
          }}
        ></div>
        <Carousel.Caption className='custom-caption'>
          <h3>Don't be afraid to contact me</h3>
          <p>If you have any ideas for adding content, don't be afraid to hit me up!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPictures;