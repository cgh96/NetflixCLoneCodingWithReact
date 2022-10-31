import styled from 'styled-components';
import { useState, } from 'react';

const Label = styled.label`
    left: 20px;
    color: #8c8c8c;
    position: absolute;
    top: ${ props => props.focus ? "10%" : "35%" };
    transition: .1s;

    @media screen and (min-width: 740px) {
        font-size: 16px;
    }
`;

const Input = styled.input`
    border: 0;
    border-radius: 4px;
    color: #fff;
    height: 45px;
    line-height: 45px;
    padding: 16px 13px 0 20px;
    background-color: #333;
    display: block;
    font-size: 16px;
    width: 90%;

    &:focus {
        outline: none;
        background-color: #4e4e4e;
    }
`;

const CheckLabel = styled.label`
    color: #333;
    display: block;
    line-height: 1.2;
    padding: 5px 25px;
    position: relative;

    &::before {
        background: #737373;  //#e6e6e6
        border: 0;
        border-radius: 2px;
        height: 16px;
        left: 0;
        margin: 7px 0 0;
        width: 16px;

        content: "";
        display: block;
        padding: 0;
        position: absolute;
        top: 2px;
    }

    &::after {
        position: relative;
        visibility: ${ props => props.toggle ? "visible" : "hidden" };
        z-index: 5;
        color: #000;
        font-size: 18px;
        margin: 0 0 0 -122px;
        top: 1px;
        content: "✔";
    }

    & span {
        color: #b3b3b3;
        font-size: 13px;
        font-weight: 400;
    }
`;

const CheckBox = styled.input`
    appearance: none;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 0;
`;

const InputWithLabel = ({ 
    label, 
    type,
    focus,
    handleFocus,
    handleBlur,
    pwRef,
    ...rest
}) => {
    const [toggle, setToggle] = useState(true);

    const toggleClick = () => {
        if(toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }
    
    return(  
        <>
            { type === "text"  &&
                <label>
                    <Input type={type} {...rest} onFocus={() => handleFocus(type)} onBlur={() => handleBlur(type)} focus={focus} />
                    <Label focus={focus} >{label}</Label>
                </label>
            }
            {   type === "password" &&
                    <label>
                        <Input type={type} {...rest} onFocus={() => handleFocus(type)} onBlur={() => handleBlur(type)} focus={focus} ref={pwRef}/>
                        <Label focus={focus} >{label}</Label>
                    </label>
            }

            { type === "checkbox" &&
                <>
                    <CheckBox type={type} value={toggle} defaultChecked />
                    <CheckLabel toggle={toggle} onClick={toggleClick}><span>{label}</span></CheckLabel>
                </>
            }
        </>
    );
};

export default InputWithLabel;