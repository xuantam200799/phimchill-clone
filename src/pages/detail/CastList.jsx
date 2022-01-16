import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import { Link } from 'react-router-dom'

import phimchillApi from '../../api/phimchillApi';

const CastList = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await phimchillApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <>
            {
                casts.map((item, i) => (
                    <Link to="/" key={i}>{item.name}, </Link>
                ))
            }
        </>
    );
}

export default CastList;