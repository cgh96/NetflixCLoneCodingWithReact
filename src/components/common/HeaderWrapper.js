import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    padding: 0 3.3vw;
    width: ${props => props.width || "100vw" };
`;

export default HeaderWrapper;