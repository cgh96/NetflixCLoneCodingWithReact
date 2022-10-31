import styled from 'styled-components';
import MovieImg from './MovieImage';
import { API_KEY, client, POSTER_URL } from '../../API/client';
import React, { useEffect, useState, useCallback, useRef } from 'react'

const SlideButtonWrapperDiv = styled.div`
    display: flex;
`;

const Button = styled.b`
    display: inline-block;
    position: absolute;
    z-index: 100;
    min-width: 2.8vw;
    height: 8.62vw;
    text-align: center;
    margin: 0.23vw 0 0 0;
    padding: 5em auto 0;
    line-height: 7.6vw;
    font-size: 4.7vw;
    color: rgba(0, 0, 0, 0);

    &:hover {
        cursor: pointer;
        color: white;
        background: rgba(0, 0, 0, .3);
        transition: .4s;
    }
`;

const PrevButton = styled(Button)`
    left: 0;
`;

const NextButton = styled(Button)`
    right: 0;
`;

const CarouselWrapperDiv = styled.div`
    display: flex;
    position: relative;
    margin: 0 0 0 -111vw;
`;


const SlideButtonWrapper = ({ type }) => {
    const [moveDirection, setMoveDirection] = useState(0);
    const [popMovie, setPopMovie] = useState(null);
    const [latestMovie, setLatestMovie] = useState(null);
    const [upcomingMovie, setUpcomingMovie] = useState(null);
    const carouselRef = useRef();

    const requestPopularMovie = async () => {
        const response = await client.get(
            `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,{
            method: 'get',
        });

        response.data.results = response.data.results.map (movie => {
            return movie = `${POSTER_URL}${movie.backdrop_path}`;
        });
        setPopMovie(response.data.results);
    };

    const requestLatestMovie = async () => {
        const response = await client.get(
            `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,{
            method: 'get',
        });

        response.data.results = response.data.results.map (movie => {
            return movie = `${POSTER_URL}${movie.backdrop_path}`;
        });
        setLatestMovie(response.data.results);
    };

    const requestupComingMovie = async () => {
        const response = await client.get(
            `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,{
            method: 'get',
        });

        response.data.results = response.data.results.map (movie => {
            return movie = `${POSTER_URL}${movie.backdrop_path}`;
        });
        setUpcomingMovie(response.data.results);
    };

    useEffect( () => {
        requestPopularMovie();
        requestLatestMovie();
        requestupComingMovie();
        
    }, []);


    const LeftClick = useCallback( () => {
        const container = carouselRef.current; 
        container.style.transform = `translateX(${1 * (100 / 20 * 6)}%)`;
        container.style.transitionDuration = '.8s';
        setMoveDirection(1);
    }, []);

    const RightClick = useCallback( () => {
        const container = carouselRef.current; 
        container.style.transform = `translateX(${-1 * (100 / 20 * 6)}%)`;
        container.style.transitionDuration = '.8s';
        setMoveDirection(-1);
    }, []);


    const handleTransitionEnd = useCallback( () => {
        const container = carouselRef.current;

        for(let cnt = 0; cnt < 6; cnt++) {
            container.style.removeProperty("transform", "none");
            container.style.removeProperty("transition-duration", "none");
            if(moveDirection === 1) {
                container.prepend(container.removeChild(container.childNodes[container.childNodes.length - 1]));
            } else {
                container.append(container.removeChild(container.childNodes[0]));
            }
            
        }
    }, [moveDirection]);

    return (
        <SlideButtonWrapperDiv>
            <PrevButton onClick={LeftClick}>{'<'}</PrevButton>
                <CarouselWrapperDiv ref={carouselRef} onTransitionEnd={handleTransitionEnd} >
                    { (type === "popMovie" && popMovie) &&  
                        (popMovie.map( (movie, index) => ( <MovieImg key={index} src={movie} /> ) ) ) 
                    }
                    { (type === "latestMovie" && latestMovie) &&
                        latestMovie.map( (movie, index) => ( <MovieImg key={index} src={movie} /> ) ) 
                    }
                    { (type === "upcomingMovie" && upcomingMovie) && 
                        upcomingMovie.map( (movie, index) => ( <MovieImg key={index} src={movie} /> ) ) 
                    }
                </CarouselWrapperDiv>
            <NextButton onClick={RightClick}>{'>'}</NextButton>
        </SlideButtonWrapperDiv>
    )
};

export default React.memo(SlideButtonWrapper);