import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const MainIndexDiv = styled.div`
    padding: 0;
    width: 100%;
    min-width: 820px;
    position: ${ props => props.param ? "fixed" : "relative" };
    top: ${props => props.param ? (-1 * props.scrollH) + "px" : "none" };
`;


const MainIndex = ({children}) => {
    const [scrollY, setScrollY] = useState([]);
    const location = useLocation();

    useEffect( () => {
        if(!location.search) { window.scrollTo(0, scrollY[0]); }
        
        window.addEventListener( "scroll", () => {
            scrollY.length <= 1 ?
                setScrollY([...scrollY, window.scrollY])
            :
                setScrollY([window.scrollY])
            ;
        })
    }, [location]);

    return (
        <MainIndexDiv param={location.search} scrollH={scrollY[0]} >
            {children}
        </MainIndexDiv>
    );
}

export default MainIndex;