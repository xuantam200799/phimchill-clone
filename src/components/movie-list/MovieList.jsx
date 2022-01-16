import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import './movie-list.scss'

import phimchillApi, { category } from '../../api/phimchillApi';

import MovieCard from '../movie-card/MovieCard';


const MovieList = props => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await phimchillApi.getMoviesList(props.type, {params});
                        break;
                
                    default:
                        response = await phimchillApi.getTvList(props.type, {params});
                        break;
                }
            } else {
                response = await phimchillApi.similar(props.category, props.id);
            }
            setItems(response.results.slice(0, 12))
        }
        getList();
    }, [props.category, props.id, props.type])
    
    return (
        <div className="grid">
            {
                items.map((e, i) => (
                    <MovieCard item={e} key={i} category={props.category} />
                ))
            }
        </div>
    )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default MovieList
