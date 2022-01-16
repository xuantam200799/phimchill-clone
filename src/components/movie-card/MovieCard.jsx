import React from 'react'

import Button from '../button/Button'

import './movie-card.scss';

import { Link } from 'react-router-dom';

import apiConfig from '../../api/apiConfig';
import { category } from '../../api/phimchillApi'

const MovieCard = props => {

    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div 
                className="movie-card" 
                // style={{backgroundImage: `url(${bg})`}}
            >
                <img src={bg} alt="" />
                <Button><i className="bx bx-play"></i></Button>
                <h3>{item.title || item.name}</h3>
            </div>
        </Link>
    )
}

export default MovieCard
