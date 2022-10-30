import React, { useState, useEffect, useRef } from 'react';
import MainHeader from "../../components/Main/MainHeader";

const HeaderContainer = () => {
    let [scrollPosition, setScrollPosition] = useState(0);
    const [searchBox, setSearchBox] = useState(0);
    const searchDiv = useRef();

    const searchBoxClick = (value) => {
        setSearchBox(value);
    }

    const updateScrollPosition = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect( () => {
        window.addEventListener("scroll", updateScrollPosition);
    });

    useEffect( () => {
        document.addEventListener("mousedown", e => {
            if(searchDiv.current && !searchDiv.current.contains(e.target)) {
                setSearchBox(0);
            }
        })
    }, [searchDiv]);
    
    return (
        <div>
            <MainHeader
                scrollPos={scrollPosition}
                setSearchBox={searchBoxClick}
                searchBox={searchBox}
                searchDiv={searchDiv}
            />
        </div>
    );
}

export default HeaderContainer;