import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'
import { useParams } from 'react-router';

import './movie-grid.scss'

import MovieCard from '../movie-card/MovieCard'
import { OutlineButton } from '../button/Button';

import phimchillApi, { category, movieType, tvType } from '../../api/phimchillApi'

const MovieGrid = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await phimchillApi.getMoviesList(movieType.upcoming, {params});
                        break;
                
                    default:
                        response = await phimchillApi.getTvList(tvType.popular, {params});
                        break;
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await phimchillApi.search(props.category, {params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [props.category, keyword])

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch (props.category) {
                case category.movie:
                    response = await phimchillApi.getMoviesList(movieType.upcoming, {params})
                    break;
            
                default:
                    response = await phimchillApi.getTvList(tvType.popular, {params})
                    break;
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await phimchillApi.search(props.category, {params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="movie-grid">
                {
                    items.map((e, i) => <MovieCard category={props.category} item={e} key={i} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    )
}

MovieGrid.propTypes = {

}

export default MovieGrid
