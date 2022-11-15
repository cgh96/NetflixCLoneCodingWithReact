import MovieImg from '../../components/Main/MovieImage';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieAction, removeMovieAction } from '../../modules/movie';

const MovieImageContainer = ({ index = 0, movie }) => {
    const { favorite } = useSelector(state => state.movie);
    const dispatch = useDispatch();
    
    const addFavorite = (movie) => {
        dispatch(addMovieAction(movie))
    }

    const removeFavorite = (movie) => {
        dispatch(removeMovieAction(movie));
    }

    return (
        <MovieImg 
            index={index} 
            movie={movie} 
            addFavorite={addFavorite} 
            removeFavorite={removeFavorite} 
            favorite={favorite}
        />
    )
}

export default MovieImageContainer;