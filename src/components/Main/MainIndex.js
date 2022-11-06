import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const MainIndexDiv = styled.div`
    padding: 0;
    width: 100%;
    position: ${ props => props.param ? "fixed" : "relative" };
    top: ${props => props.param ? (-1 * props.scrollH) + "px" : "none" };
`;


const MainIndex = ({children}) => {
    const [params, setParams] = useSearchParams();
    const [scrollY, setScrollY] = useState([]);

    useEffect( () => {
        window.addEventListener( "scroll", () => {
            scrollY.length < 2 ?
                setScrollY([...scrollY, window.scrollY])
            :
                setScrollY([window.scrollY])
            ;
        })

        if(!params.get("id")) { window.scrollTo(0, scrollY[0]); }
    }, [params]);

    return (
        <MainIndexDiv param={params.get("id")} scrollH={scrollY[0]} >
            {children}
        </MainIndexDiv>
    );
}

export default MainIndex;