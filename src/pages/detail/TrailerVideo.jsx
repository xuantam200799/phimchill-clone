import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import phimchillApi from '../../api/phimchillApi';

const TrailerVideo = props => {

    const {category} = useParams();

    const [video, setVideo] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await phimchillApi.getVideos(category, props.id);
            setVideo(res.results[0]);
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            <Video item={video}/>
        </>
    );
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default TrailerVideo;