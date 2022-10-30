import styled from 'styled-components';
import MovieImg from './MovieImage';
import { API_KEY, client, POSTER_URL } from '../../API/client';
import { useEffect, useState, useCallback } from 'react'

const CarouselWrapperDiv = styled.div`
    display: flex;
    position: relative;
    margin: 0 0 0 -111vw;

    transform: translate(${ props => props.direction * (100 / 20 * 6)}%);
    transition-duration: ${ props => !props.direction ? "none" : ".8s" };
`;

const CarouselWrapper = ({ type, direction, handleTransitionEnd, carouselRef }) => {
    const [popMovie, setPopMovie] = useState(null);
    const [latestMovie, setLatestMovie] = useState(null);
    const [upcomingMovie, setUpcomingMovie] = useState(null);

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

    return (
        <CarouselWrapperDiv direction={direction} onTransitionEnd={() => { handleTransitionEnd();  }} ref={carouselRef} >
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
    )
}

export default CarouselWrapper;