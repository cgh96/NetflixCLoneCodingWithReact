import MovieModal from '../../components/Main/MovieModal';
import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import newContent from '../../MovieData/newContents.json';
import hotContent from '../../MovieData/hotContents.json';
import koreaDrama from '../../MovieData/koreaDrama.json';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieAction, removeMovieAction } from '../../modules/movie';

const MovieModalContainer = () => {
    const [params, setParams] = useSearchParams();
    const [data, setData] = useState();
    const [play, setPlay] = useState(false);

    const videoRef = useRef();
    const { favorite } = useSelector(state => state.movie);
    const dispatch = useDispatch();

    const addFavoriteMovie = () => {
        dispatch(addMovieAction(data));
    }

    const removeFavoriteMovie = () => {
        dispatch(removeMovieAction(data));
    }

    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            setParams("");
        }
    }

    const playVideo = () => {
        setPlay(true);
        videoRef.current.play();
    }

    const stopVideo = () => {
        setPlay(false);
        videoRef.current.pause();

        setTimeout( () => {
            videoRef.current.currentTime=0;
        }, 300);
    }

    useEffect( () => {
        if(!params.get("id")) { setData(null); }
        else {
            if(params.get("id").includes("hot")) {
                setData( hotContent.find(elem => elem.id === params.get("id")) );
            }
            if(params.get("id").includes("new")) {
                setData( newContent.find(elem => elem.id === params.get("id")) );
            }
            if(params.get("id").includes("korea")) {
                setData( koreaDrama.find(elem => elem.id === params.get("id")) );
            }
        }

    }, [params]);


    return (
        <MovieModal 
            data={data} 
            closeModal={closeModal} 
            videoRef={videoRef}  
            playVideo={playVideo} 
            stopVideo={stopVideo}
            play={play}
            addFavoriteMovie={addFavoriteMovie}
            removeFavoriteMovie={removeFavoriteMovie}
            favorite={favorite}
        />
    )
}

export default MovieModalContainer;