import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import MovieCard from '../movie-card/MovieCard'

import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import phimchillApi, { category } from '../../api/phimchillApi';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './hero-slide.scss';

const HeroSlide = (props) => {

    SwiperCore.use([Autoplay, Navigation]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            const params = {};
            let response = null;
            try {
                if (props.type !== 'similar') {
                    switch (props.category) {
                        case category.movie:
                            response = await phimchillApi.getMoviesList(props.type, {params})
                            break;
                    
                        default:
                            response = await phimchillApi.getTvList(props.type, {params})
                            break;
                    }
                } else {
                    response = await phimchillApi.similar(props.category, props.id)
                }
                setMovieItems(response.results.slice(0, 15));
            } catch (error) {
                console.log(error);
            }
        }
        getList()
    }, [props.category, props.type, props.id])

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={5}
                navigation={true}
                autoplay={{
                    "delay": 2500
                }}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={category.movie} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

HeroSlide.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}


export default HeroSlide
