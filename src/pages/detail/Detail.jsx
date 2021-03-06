import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

import Section, { SectionTitle, SectionBody } from '../../components/section/Section'
import HeroSlide from '../../components/hero-slide/HeroSlide'
import CastList from './CastList'
import TrailerVideo from './TrailerVideo';

import phimchillApi from '../../api/phimchillApi'
import apiConfig from '../../api/apiConfig';

import './detail.scss'

const Detail = () => {

    const trailerVideo = useRef(null);

    const { category, id } = useParams();
    const [item, setItem] = useState(null);

    const scollToVideo = () => {
        trailerVideo.current.classList.toggle("active");
        trailerVideo.current.scrollIntoView();
    }

    useEffect(() => {
        const getDetail = async () => {
            const response = await phimchillApi.detail(category, id, {params:{}});
            setItem(response);
            trailerVideo.current.classList.remove("active");
            window.scrollTo(0, 0);
        }
        getDetail();
    }, [category, id])

    return (
        <>
            {
                item && (
                    <div className="body-wrap">
                        <div className="movie-content">
                            <div className="movie-content__poster"
                                style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}
                            >
                                <div className="movie-content__poster__info">
                                    <div className="movie-content__poster__info__img">
                                        <img src={apiConfig.originalImage(item.poster_path || item.backdrop_path)} alt="" />
                                    </div>
                                    <div className="movie-content__poster__info__txt">
                                        <h2>{item.title}</h2>
                                        <h3>{item.tagline}</h3>
                                        <div>
                                            <button className="detail-btn ocean" onClick={scollToVideo}>
                                                <i className="bx bxl-youtube"></i>
                                                Trailer
                                            </button>
                                            <button className="detail-btn red">
                                                <i className="bx bx-play-circle"></i>
                                                Xem phim
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="movie-content__info">
                                <div className="movie-content__info__title">
                                    <p>
                                        <span>Tr???ng th??i: </span>
                                        <Link to="/">{item.status}</Link> 
                                    </p>
                                    <p>
                                        <span>Ng??y ph??t h??nh: </span>
                                        <Link to="/">{item.release_date}</Link> 
                                    </p>
                                    <p>
                                        <span>Qu???c gia: </span>
                                        {item.production_countries.map((e, i) => (
                                            <Link to="/" key={i}>{e.name}, </Link> 
                                        ))}
                                    </p>
                                    <p>
                                        <span>Th??? lo???i: </span>
                                        {item.genres.map((e, i) => (
                                            <Link to="/" key={i}>{e.name}, </Link> 
                                        ))}
                                    </p>
                                    <p>
                                        <span>Di???n vi??n: </span>
                                        <CastList id={item.id} />
                                    </p>
                                    <p>
                                        <span>??i???m trung b??nh: </span>
                                        <Link to="/">{item.vote_average}</Link> 
                                    </p>
                                </div>
                                <div className="seperate-line"></div>
                                <div className="movie-content__info__overview">
                                    <h3>N???i dung phim {item.original_title}</h3>
                                    <p>{item.overview}</p>
                                </div>
                                <div className="trailer-video" ref={trailerVideo}>
                                    <div className="seperate-line"></div>
                                    <TrailerVideo id={item.id} />
                                </div>
                            </div>

                        </div>
                        <Section>
                            <SectionTitle>
                                C?? th??? b???n c??ng mu???n xem
                            </SectionTitle>
                            <SectionBody>
                                <HeroSlide category={category} type="similar" id={item.id} />
                            </SectionBody>
                        </Section>
                        <div className="seperate-line"></div>
                        <Section>
                            <SectionTitle>
                                Phim ????? c???
                            </SectionTitle>
                            <SectionBody>
                                <HeroSlide category="movie" type="popular" />
                            </SectionBody>
                        </Section>
                    </div>
                )
            }
        </>
    )
}

export default Detail
