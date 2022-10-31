import styled from 'styled-components';

const LoginMainDiv = styled.div`
    height: 100%;

    &>div {
        margin: 0;
        min-height: 100%;
        padding: 0;
        position: relative;
        z-index: 0;
    }
`;

const LoginMainPage = ({ children }) => {
    return (
        <LoginMainDiv>
            <div>
                {children}
            </div>
        </LoginMainDiv>
    );
};

export default LoginMainPage;