import React from 'react'

import { Link } from 'react-router-dom'

import HeroSlide from '../components/hero-slide/HeroSlide'
import Section, { SectionTitle, SectionBody } from '../components/section/Section'
import { OutlineButton } from '../components/button/Button'
import MovieList from '../components/movie-list/MovieList'

import { category, movieType, tvType } from '../api/phimchillApi';

const Home = () => {

    return (
        <div className="body-wrap">
            <Section>
                <SectionTitle>
                    PHIM ĐỀ CỬ
                </SectionTitle>
                <SectionBody>
                    <HeroSlide category="movie" type="popular" />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    <Link to="/movie">PHIM LẺ MỚI CẬP NHẬT</Link>
                    <Link to="/movie"><OutlineButton className="small">Xem tất cả</OutlineButton></Link>
                </SectionTitle>
                <SectionBody>
                    <MovieList category={category.movie} type={movieType.upcoming} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    <Link to="/movie">PHIM chiếu rạp</Link>
                    <Link to="/movie"><OutlineButton className="small">Xem tất cả</OutlineButton></Link>
                </SectionTitle>
                <SectionBody>
                    <MovieList category={category.movie} type={movieType.popular} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    <Link to="/tv">PHIM bộ mới cập nhật</Link>
                    <Link to="/tv"><OutlineButton className="small">Xem tất cả</OutlineButton></Link>
                </SectionTitle>
                <SectionBody>
                    <MovieList category={category.tv} type={tvType.popular} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    <Link to="/movie">PHIM thịnh hành</Link>
                    <Link to="/movie"><OutlineButton className="small">Xem tất cả</OutlineButton></Link>
                </SectionTitle>
                <SectionBody>
                    <MovieList category={category.movie} type={movieType.top_rated} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    <Link to="/movie">PHIM sắp chiếu</Link>
                    <Link to="/movie"><OutlineButton className="small">Xem tất cả</OutlineButton></Link>
                </SectionTitle>
                <SectionBody>
                    <MovieList category={category.tv} type={tvType.on_the_air} />
                </SectionBody>
            </Section>
        </div>
    )
}

export default Home
