import styled from 'styled-components';
import MovieImageContainer from '../../container/MainContainer/MovieImageContainer';
import newContent from '../../MovieData/newContents.json';
import hotContent from '../../MovieData/hotContents.json';
import koreaDrama from '../../MovieData/koreaDrama.json';
import React, { useEffect, useState, useCallback, useRef } from 'react'

const SlideButtonWrapperDiv = styled.div`
    display: flex;
`;

const Button = styled.b`
    display: inline-block;
    position: absolute;
    z-index: 110;
    width: 1.75vw;
    height: 8.6vw;
    text-align: center;
    margin: 0;
    line-height: 7.6vw;
    font-size: 3vw;
    color: rgba(0, 0, 0, 0);

    &:hover {
        cursor: pointer;
        color: white;
        background: rgba(0, 0, 0, .3);
        transition: .4s;
    }
`;

const PrevButton = styled(Button)`
    left: 0;
    padding: 0.3vw 0.7vw 0.3vw 0;
    border-top-right-radius: 10px 7x;
    border-bottom-right-radius: 10px 7x;
`;

const NextButton = styled(Button)`
    right: 0;
    padding: 0.3vw 0.5vw 0.3vw 0.3vw;
    border-top-left-radius: 10px 7x;
    border-bottom-left-radius: 10px 7x;
`;

const CarouselWrapperDiv = styled.div`
    display: flex;
    position: relative;
    margin: 0 0 0 -95.3vw;
`;


const SlideButtonWrapper = ({ type }) => {
    const [moveDirection, setMoveDirection] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState(null);
    const carouselRef = useRef();

    const requestContent = () => {
        setIsLoading(true);
        if(type === "new-content") {
            setContent(newContent);
        }  else if(type === "hot-content") {
            setContent(hotContent);
        } else if (type === "korea-drama") {
            setContent(koreaDrama);
        }
        setIsLoading(false);
    };

    useEffect( () => {
       requestContent();
    }, []);


    const LeftClick = useCallback( () => {
        const container = carouselRef.current; 
        container.style.transform = `translateX(${1 * (100 / 24 * 6)}%)`;
        container.style.transitionDuration = '.8s';
        setMoveDirection(1);
    }, []);

    const RightClick = useCallback( () => {
        let container = carouselRef.current;
        container.style.transform = `translateX(${-1 * (100 / 24 * 6)}%)`;
        container.style.transitionDuration = '.8s';
        setMoveDirection(-1);
    }, []);


    const handleTransitionEnd = useCallback( () => {
        const container = carouselRef.current;
        container.style.removeProperty("transform", "none");
        container.style.removeProperty("transition-duration", "none");
        for(let cnt = 0; cnt < 6; cnt++) {
            if(moveDirection === 1) {
                container.prepend(container.removeChild(container.childNodes[container.childNodes.length - 1]));
            } else {
                container.append(container.removeChild(container.childNodes[0]));
            }
        }
    }, [moveDirection]);

    return (
        <SlideButtonWrapperDiv>
            <PrevButton onClick={LeftClick}>{'<'}</PrevButton>
                <CarouselWrapperDiv ref={carouselRef} onTransitionEnd={handleTransitionEnd} >
                    { isLoading &&
                        <div style={{ color: "white" }}> image Loading... </div>
                    }
                    {  content &&  
                        content.map( (movie, index) =>  { 
                            return <MovieImageContainer 
                                        key={movie.title}  
                                        index={ (index + 1) % 6 === 0 ? 6 : (index + 1) % 6 } 
                                        movie={movie}
                                    /> 
                        })
                    }
                </CarouselWrapperDiv>
            <NextButton onClick={RightClick}>{'>'}</NextButton>
        </SlideButtonWrapperDiv>
    )
};

export default SlideButtonWrapper;