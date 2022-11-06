import styled from 'styled-components';

const IndexPointDiv = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: rgba(0,0,0,.192);

    * {
        font-size: 16px;
    }
`;

const IndexPoint = ({ children }) => {
    return (
        <IndexPointDiv>
                {children}
        </IndexPointDiv>
    )
}

export default IndexPoint;