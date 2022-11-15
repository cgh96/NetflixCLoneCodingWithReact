import hotContents from '../MovieData/hotContents.json';
import koreaDrama from '../MovieData/koreaDrama.json';
import newContents from '../MovieData/newContents.json';

const data = [...hotContents, ...koreaDrama, ...newContents,];

//Action
const SEARCH_MOVIE = 'search/SEARCH_MOVIE';
const ADD_MOVIE = 'favorite/ADD_MOVIE';
const REMOVE_MOVIE = 'favorite/REMOVE_MOVIE';

//Action 생성함수
export const addMovieAction = (movie) => {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}

export const removeMovieAction = (movie) => {
    return {
        type: REMOVE_MOVIE,
        payload: movie
    }
}

export const searchMovieAction = (title) => {
    return {
        type: SEARCH_MOVIE,
        payload: title.replace(/\s/g, ""),
    }
}

//initialState
const initialState = {
    favorite : [],
    search: [],
};

//Reducer
const movieReducer =  (state, action) => {
    if(action.type === ADD_MOVIE) {
        return {
            ...state,
            favorite: [
                ...state.favorite, 
                action.payload,
            ]
        }
    } else if(action.type === REMOVE_MOVIE) {
        return {
            ...state,
            favorite: [...state.favorite].filter( elem => elem !== action.payload ),
        }
    } else if (action.type === SEARCH_MOVIE) {
        return {
            ...state,
            search: data.filter(movie => movie.title.replace(/\s/g, "").includes(action.payload) )
        }
    } else {
        return initialState;
    }
}

export default movieReducer;