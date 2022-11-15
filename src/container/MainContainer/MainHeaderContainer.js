import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchMovieAction } from '../../modules/movie';
import MainHeader from "../../components/Main/MainHeader";

const HeaderContainer = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [searchVal, setSearchVal] = useState("");
    const [searchBox, setSearchBox] = useState(0);

    const searchDiv = useRef();
    const dispatch = useDispatch();

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();
    
    const navigate = useNavigate();
    
    const searchBoxClick = (value) => {
        setSearchBox(value);
    }

    const updateSearchValue = (e) => {
        setSearchVal(e.target.value);
    };

    useEffect( () => {
        if(!location.pathname.includes('/search')) {
            setCurrentPath(location.pathname);
        }
    }, [location]);

    useEffect( () => {
        if(!searchVal.length && location.pathname === '/main/search') {
            navigate(`${currentPath}`);
        }

        if(searchVal.length) { 
            navigate(`/main/search`); 
            dispatch(searchMovieAction(searchVal));
        }
    }, [searchVal]);

    const updateScrollPosition = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect( () => {
        window.addEventListener("scroll", updateScrollPosition);
    }, []);

    useEffect( () => {
        document.addEventListener("mousedown", e => {
            if(searchDiv.current && !searchDiv.current.contains(e.target)) {
                setSearchBox(0);
            }
        });
    }, []);
    
    return (
        <div>
            <MainHeader
                scrollPos={scrollPosition}
                setSearchBox={searchBoxClick}
                searchBox={searchBox}
                searchDiv={searchDiv}
                updateSearchValue={updateSearchValue}
                searchVal={searchVal}
            />
        </div>
    );
}

export default HeaderContainer;