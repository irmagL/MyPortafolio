import React from 'react';
import Slider from 'react-slick';

import './Carrousel.css';

const Carrousel = ({ children }) => {
    return (
      <div style={{ marginBottom: '20px' }}>
        <Slider
          dots
          fade
          dotsClass="dots"
          autoplay
          autoplaySpeed={3500}
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {
            children
          }
        </Slider>
      </div>
    );
};

export default Carrousel;
