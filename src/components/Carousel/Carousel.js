import React from 'react';

import './Carousel.css';
import './glider.min.css';
const Carousel = ({ heading, movieList }) => {  

	return (
		<section className='movies-section'>
			<h3>{heading}</h3>
			<div className='glider-contain multiple'>
				<button className='glider-prev'>
					<i className='fa fa-chevron-left'></i>
				</button>
				<div className='glider'>
					<div className='movies'>
						{movieList.map((movie) => (
							<figure key={movie.id}>
								<a id='movie-link'>
									<img src={movie.img} alt={movie.title}></img>
								</a>
							</figure>
						))}
					</div>
				</div>
        <button className="glider-next">
          <i className="fa fa-chevron-right"></i>
        </button>
			</div>
		</section>
	);
};

export default Carousel;
