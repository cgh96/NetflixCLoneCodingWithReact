import styled from 'styled-components';
import globe from '../../assets/globe.png';
import triangle from '../../assets/selectTriangle.png';

const LandHeaderDiv = styled.div`
    position: relative;
    display: flex;
    width: 150px;
    margin-bottom: 25px;

    &::before {
        content: '';
        position: relative;
        z-index: 5;
        margin: ${ props => props.globeMargin };
        //left: 2rem;
        width: ${ props => props.size };
        height: ${ props => props.size };
        background-size: ${ props => props.size };
        border-radius: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        background-image: url(${globe});
        background-repeat: no-repeat;
        transform: translateY(100%);
    }

    &::after {
        content: '';
        margin: ${ props => props.triMargin };;
        z-index: 0;
        width: ${ props => props.size };
        height: ${ props => props.size };
        background-size: ${ props => props.size };
        position: relative;
        background-color: rgba(255, 0, 0, 0);
        background-image: url(${triangle});
        background-repeat: no-repeat;
    }
`;

const StyledSelect = styled.select`
        box-sizing: border-box;
        z-index: 1000;
        position:relative;
        top: 2px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: 1px solid ${ props => props.borderColor };;
        background-color: rgba(0,0,0,.2);
        color: ${ props => props.fontColor };;
        text-align: center;
        width: ${ props => props.width };
        height: ${ props => props.height };
        font-size: ${props => props.fontSize };
        border-radius: 3px 3px;
        padding: 0.5rem 0.8rem;
        margin: 0px 9px;
`;

const LangSelector = ({ type }) => {
    return (
        <>
            { type === "land-header" &&
                <LandHeaderDiv 
                    size="0.9rem"
                    globeMargin="0 -1.9rem 0 0"
                    triMargin="14px 0 0 -2rem"
                >
                    <StyledSelect 
                        defaultValue="ko"
                        width="6rem"
                        height="2.3rem"
                        borderColor="#aaa"
                        fontColor="white"
                        fontSize="0.88rem"
                    >
                        <option lang="ko" value="ko">한국어</option>
                        <option lang="en" value="en">English</option>
                    </StyledSelect>
                </LandHeaderDiv>
            }
            { type === "land-footer" &&
                <LandHeaderDiv
                    size="1rem"
                    globeMargin="2px -2.5rem 0 1rem"
                    triMargin="1.2rem 0 0 -2.5rem"
                >
                    <StyledSelect 
                        defaultValue="ko"
                        width="8rem" 
                        height="3rem" 
                        borderColor="#333" 
                        fontColor="#333"
                        fontSize="0.99rem"
                    >
                        <option lang="ko" value="ko">한국어</option>
                        <option lang="en" value="en">English</option>
                    </StyledSelect>
                </LandHeaderDiv>
            }
        </>
    )
}

export default LangSelector;