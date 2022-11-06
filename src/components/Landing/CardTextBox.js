import styled from 'styled-components';
import { StyledLink } from '../common/StyledLink';

const CardTextDiv = styled.div`
    padding: 75px auto;
    color: white;
    max-width: 950px;
    margin: 5rem auto;
    height: 100%;

    & h1 {
        text-align: center;
        font-weight: 200;
        font-size: 4.2rem;
        margin: 0;
    }

    & h2 {
        font-weight: 300;
        font-size: 1.4rem;
        margin: 1rem 8.5rem;
    }

    & h3 {
        font-weight: 500;
        font-size: 16px;
    }

    @media (min-width: 1450px) {
        & h1 {
            margin: 0 auto;
            font-size: 4rem;
            max-width: 540px;
            font-weight: lighter;
        }
    }

    @media (max-width: 940px) {
        margin: 3rem 12%;

        & h1 {
            text-align: center;
            font-size: 48px;
            margin: 0 20px;
            padding: 0 30px;
            font-weight: 500;
        }

        & h2 {
            font-size: 1.6rem;
            margin: 5px 20px;
            font-weight: 400;
        }

        & h3 {
            font-weight: 300;
            margin: 10px 5px;
        }
    }
`;

const FormLink = styled(StyledLink)`
    font-size: 1.3rem;
`;

const StyledForm = styled.form`
    width: 100%;

    & button {
        margin: 0;
        background-color: red;
        border: 1px solid red;
        width: 200px;
        height: 64px;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;
    }

    @media only screen and (max-width: 940px) {
        font-size: 1.3rem;

        & button {
            width: 180px;
            height: 55px;
            font-size: 1.3rem;
        }
    }
`;

const FormOutlineDiv = styled.div`
    display: flex;
    margin: 0.5rem 0 0 90px;

    & div {
        max-width: 600px;
        height: 100px;
    }

    & input {
        width: 400px;
        height: ${props => props.visible ? "61px" : "63px" };
        font-size: 1.2em;
        padding: 0 0 0 10px;
        margin: ${props => props.visible ? "0 0 0 21px" : "0" };
        border: 0;
        border-bottom: ${props => props.visible ? "2px solid #FFA00A" : "0" };
        outline: none;
    }

    label {
        box-sizing: border-box;
        position: relative;
        top: ${ props => props.visible ? "-22px" : "-5px" };
        left: 95px;
        height: 9px;
        color: #808080b0;
        font-size: ${ props => props.visible ? "12px" : "16px" };
    }

    
    @media only screen and (max-width: 940px) {
        display: block;
        margin: 0.5rem 0;
        
        & div {
            margin: 0 auto;
        }

        & input {
            margin: ${ props => props.visible ? "0 0 0 -58px" : "0 0 0 -80px" };
        }

        label {
            top: ${ props => props.visible ? "-21px" : "0" };
            left: 14px;
        }
    }
`;

const GuideMessage = styled.div`
    width: 400px;
    color: #FFA00A;
    margin: -30px 0 0 80px;

    @media only screen and (max-width: 940px) {
        margin: -100px 0 0 -20px;
    }
`;

const CardTextBox = ({ handleFocus, handleBlur, handleChange, messageVisible, emailInput }) => {
    return (
        <CardTextDiv>
            <h1>영화와 시리즈를 무제한으로.</h1>
            <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
            <StyledForm>
                <h3>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                <FormOutlineDiv visible={messageVisible}>
                    <div>
                        <label htmlFor="email-address">이메일 주소</label>
                        <input 
                            ref={emailInput}
                            type="email"
                            id="email-address"
                            autoComplete='off'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                    </div>
                    <FormLink to="/main"><button>시작하기</button></FormLink>
                </FormOutlineDiv>
                { messageVisible ? 
                    <GuideMessage>이메일 주소를 입력해주세요</GuideMessage> : ""
                }
            </StyledForm>
        </CardTextDiv>
    )
}

export default CardTextBox;