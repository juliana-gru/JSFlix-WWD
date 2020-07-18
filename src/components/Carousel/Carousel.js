import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = ({ heading, movieList,...props }) => {

	const settings = {
    speed: 500,
		slidesToScroll: 1,
		slidesToShow: 3,
		infinite: false,
	}

	return (
		<section className='movies-section'>
			<h3>{heading}</h3>
			<div className="carousel-container">
				<Slider className='movies carousel' {...settings}>
					{movieList.map((movie) => (
						<div key={movie.id} className="carousel-movie">
							<a id='movie-link'>
								<img src={movie.img} alt={movie.title}></img>
							</a>
						</div>
					))}
				</Slider>
			</div>						
		</section>
	);
};

export default Carousel;


