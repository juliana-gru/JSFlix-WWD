/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = ({
  heading, itemsList, type,
}) => {
  const settings = {
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 8,
    infinite: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className={`${type}-section carousel-section`}>
      <h3>{heading}</h3>
      <div className="carousel-container">
        <Slider {...settings}>
          {itemsList.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
