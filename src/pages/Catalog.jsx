import React from 'react'

import { useParams } from 'react-router-dom';

import Section, { SectionTitle, SectionBody } from '../components/section/Section'
import MovieGrid from '../components/movie-grid/MovieGrid'

import { category as cate } from '../api/phimchillApi';


const Catalog = () => {

    const { category } = useParams();

    return (
        <div className="body-wrap">
            <Section>
                <SectionTitle>
                    {category === cate.movie ? 'Phim lẻ' : "Phim bộ"}
                </SectionTitle>
                <SectionBody>
                    <MovieGrid category={category} />
                </SectionBody>
            </Section>
        </div>
    )
}

export default Catalog
