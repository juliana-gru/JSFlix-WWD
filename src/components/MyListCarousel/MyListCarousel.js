import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousel/Carousel.css';

const MyList = ({ heading, itemsList, ...props }) => {
	const settings = {
    speed: 500,
		slidesToScroll: 1,
		slidesToShow: 8,
		infinite: false,
		responsive: [
			{
				breakpoint: 1600,
				settings: {	slidesToShow: 7}
			},
			{
				breakpoint: 1400,
				settings: {slidesToShow: 6}
			},
			{
				breakpoint: 1100,
				settings: {slidesToShow: 5}
			},
			{
				breakpoint: 400,
				settings: {slidesToShow: 3}
			}
		]
	}

	return (
		<section className="movies-section tv-shows-section">
			<h3>{heading}</h3>
      {console.log(itemsList)}
			<div className="carousel-container">
        {!itemsList && <p>No items in your personal list.</p>}
				{itemsList && <Slider  {...settings}>
					{itemsList.map((item) => (
						<div key={item.id} className="carousel-item">
							<a id='movie-link'>
								<img src={item.img} alt={item.title}></img>
							</a>
						</div>
					))}
				</Slider>}
			</div>						
		</section>
	);
};

export default MyList;