import Search from '../../components/Search/Search';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const SearchContainer = () => {
    const { search } = useSelector(state => state.movie);
    console.log(search);
    return (
        <Search movies={ search }/>
    );
}

export default SearchContainer;