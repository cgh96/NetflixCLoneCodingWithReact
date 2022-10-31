import styled from 'styled-components';
import SlideButtonWrapper from './SlideButtonWrapper';

const MovieRowSectionDiv = styled.div`
    position: relative;
    top: -10vw;
    padding: 0 3.3vw;
`;

const RowContainerDiv = styled.div`
    margin: 0 0 3vw 0;

    &>div {
        box-sizing: border-box;
        padding: 0;
    }

    & span {
        display: block;
        margin: 0 0 1vw 0;
    }
`;

const RowHeaderTitleDiv = styled.div`
    display: table-cell;
    font-size: 1.4vw;
    line-height: 1.25vw;
    vertical-align: bottom;
    color: white;
`;

const MovieRowSection = ({ title, type }) => {

    return (
        <MovieRowSectionDiv>
            <RowContainerDiv>
                <div>
                    <span><RowHeaderTitleDiv>{title}</RowHeaderTitleDiv></span>
                    <SlideButtonWrapper type={type}/>
                </div>
            </RowContainerDiv>
        </MovieRowSectionDiv>
    )
}

export default MovieRowSection;