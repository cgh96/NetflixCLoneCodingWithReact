import styled from 'styled-components';
import InputWithLabel from './InputWithLabel';
import { StyledLink } from '../common/StyledLink';
import { useState, useCallback, useEffect } from 'react';

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
    visibility: ${props => props.visible };
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

const LoginForm = (
{ 
    handleSubmit,
    textFocus, 
    pwFocus, 
    visible, 
    handleFocus, 
    handleBlur, 
    emailRef,
    passwordRef
}) => {
    const [pw, setPw] = useState({ value: "", design: false });
    const [email, setEmail] = useState({ value: "" , design: false });
    const [pwType, setPwType] = useState("password");
    let regExp = new RegExp(/[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}/);

    const pwCtrl = useCallback( () => {
        pwType ==="password" ? setPwType("text") : setPwType("password");
    }, [pwType]);


    const emailValue = useCallback( (e) => {
        if(regExp.test(e.target.value) || e.target.value.length === 0) {
            setEmail({ value: e.target.value, design: false });
            e.target.style.cssText=`
                border-bottom: none; 
            `;
        } else {
            setEmail({ value: e.target.value, design: true })
            e.target.style.cssText=`
                border-bottom: 2px solid #E87C03; 
            `;
        }
    }, [regExp]);

    const pwValue = useCallback( (e) => {
        if( (e.target.value.length >= 4 && e.target.value.length <= 60) || e.target.value === "") {
            setPw({ value: e.target.value, design: false });
            e.target.style.cssText=`
                border-bottom: none; 
            `;
        } else {
            setPw({ value: e.target.value, design: true });
            e.target.style.cssText=`
                border-bottom: 2px solid #E87C03; 
            `;
        }
    }, [pw]);

    useEffect( () => {
        pw.design ? passwordRef.current.style.cssText=`
            border-bottom: 2px solid #E87C03; 
        `
        :
        passwordRef.current.style.cssText=`
            border-bottom: none; 
        `
    }, [pwType]);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <LoginInputDiv>
                <NfInputPlacementDiv>
                    <InputWithLabel 
                        type="text" 
                        autocomplete="off" 
                        label="이메일 주소 또는 전화번호"
                        handleFocus={handleFocus}
                        handleBlur={handleBlur}
                        focus={textFocus}
                        inputRef={emailRef}
                        onChange={emailValue}
                    />
                </NfInputPlacementDiv>
                <div style={{ color: "#E87C03", height: "18px", fontSize: "13px" }}>{ email.design && <>정확한 이메일 주소를 입력하세요.</> }</div>
            </LoginInputDiv>
            <LoginInputDiv>
                <PasswordControlsDiv>
                    <InputWithLabel 
                        type={pwType}
                        autocomplete="off" 
                        label="비밀번호"
                        handleFocus={handleFocus}
                        handleBlur={handleBlur}
                        focus={pwFocus}
                        onChange={pwValue}
                        value={pw.value}
                        inputRef={passwordRef}
                    />
                </PasswordControlsDiv>
                <PasswordToggleBtn title="비밀번호표시" visible={visible} onClick={pwCtrl} > { pwType === "password" ? "표시" : "숨기기" }</PasswordToggleBtn>
                <div style={{ color: "#E87C03", height: "18px", margin: "-58px 0 20px", fontSize: "13px" }}>{ pw.design && <>비밀번호는 4~60자 사이여야 합니다.</> }</div>
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