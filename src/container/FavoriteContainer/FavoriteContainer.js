import Favorite from '../../components/Favorite/Favorite';
import { useSelector } from 'react-redux';

const FavoriteContainer = () => {
    const { favorite } = useSelector(state => state.movie);
    
    return(
        <Favorite favorite={favorite} />
    );
};

export default FavoriteContainer;