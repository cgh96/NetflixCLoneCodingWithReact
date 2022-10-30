import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    &, &:hover, &:link, &:visited {
        color: white;
        text-decoration-line: none;
        cursor: pointer;
    }
`;