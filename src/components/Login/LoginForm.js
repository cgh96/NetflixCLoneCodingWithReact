import styled from 'styled-components';
import InputWithLabel from './InputWithLabel';
import { StyledLink } from '../common/StyledLink';

const LoginInputDiv = styled.div`
    padding-bottom: 16px;
    max-width: 100%;
`;

const NfInputPlacementDiv = styled.div`
    position: relative;
`;

const PasswordControlsDiv = styled(NfInputPlacementDiv)`
    display: flex;

    &>label {
        flex-grow: 1;
    }
`;

const PasswordToggleBtn = styled.div`
    position: relative;
    left: 75%;
    top: -41px;
    display: block;
    width: 70px;
    height: 58px;
    padding: 0 28px 0 0;
    appearance: none;
    visibility: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    border: 0;
    color: #8c8c8c;
    font-size: 16px;
    text-align: right;
`;

const LoginButton = styled.button`
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    margin: 24px 0 12px;
    background: #e50914;
    color:white;
    border: 1px solid #e50914;
    height: 55px;
    cursor: pointer;

    @media screen and (min-width: 360px) {
        max-width: 95%;
        width: 90%;
    }

    @media screen and (min-width: 500px) {
        box-sizing: border-box;
        display: inline-block;
        line-height: 1em;
        font-size: 17px;
        font-weight: 700;
        margin: 0;
        min-height: 37px;
        min-width: 94%;
        width: 99%;
        border: 0;
    }

    @media screen and (min-width: 740px) {
        min-width: 100%;
    }
`;

const LoginFormHelpDiv = styled.div`
    display: flex;
    margin-top: 4px;
    &>div {
        flex-grow: 1;
        box-sizing: border-box;
        font-size: 14px;
        position: relative;
        display: inline-block;
        margin-bottom: -5px;
        color: #b3b3b3;
    }
`;

const LoginHelpLink = styled(StyledLink)`
    padding-top: 7px;
    color: #b3b3b3;
    font-size: 13px;

    &:link, &:visited {
        color: #b3b3b3;
    }

    @media only screen and (max-width: 740px) {
        margin-right: 2.9em;
    }
`;

const LoginForm = ({ toggle }) => {
    return (
        <form>
            <LoginInputDiv>
                <NfInputPlacementDiv>
                    <InputWithLabel type="text" autocomplete="off" label="이메일 주소 또는 전화번호"/>
                </NfInputPlacementDiv>
            </LoginInputDiv>
            <LoginInputDiv>
                <PasswordControlsDiv>
                    <InputWithLabel type="password" autocomplete="off" label="비밀번호"/>
                </PasswordControlsDiv>
                <PasswordToggleBtn title="비밀번호표시" >표시</PasswordToggleBtn>
            </LoginInputDiv>
            <LoginButton type="submit" autocomplete="off">로그인</LoginButton>
            <LoginFormHelpDiv>
                <div>
                    <InputWithLabel type="checkbox" value="true" autocomplete="off" label="로그인 정보 저장"></InputWithLabel>
                </div>
                <LoginHelpLink to="#">도움이 필요하신가요?</LoginHelpLink>
            </LoginFormHelpDiv>
        </form>
    );
}

export default LoginForm;