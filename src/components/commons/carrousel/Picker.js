import React from 'react';

import Slider from 'react-slick';

const Picker = ({ children }) => (
  <Slider
    className="carrousel"
    infinite={false}
    speed={280}
    slidesToShow={5}
    slidesToScroll={1}
    autoplay={false}
    arrows={false}
    centerMode
    focusOnSelect
    afterChange={currentSlide => {
      // onChange(currentSlide);
    }}
  >
    { children }
  </Slider>
);

export default Picker;
