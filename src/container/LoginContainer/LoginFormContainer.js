import LoginForm from '../../components/Login/LoginForm';
import { useState, useRef } from 'react';

const LoginFormContainer = () => {
    const [visible, setVisible] = useState("hidden");
    const [textFocus, setTextFocus] = useState(false);
    const [pwFocus, setPwFocus] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();


    const preventSubmit = (e) => {
        e.preventDefault();
    }

    const handleFocus = (e) => {
      if(e.target === passwordRef.current) {
        setPwFocus(true);
        setVisible("visible");
      }

      if(e.target === emailRef.current) {
        setTextFocus(true);
      }
    }

    const handleBlur = (e, type) => {
        if(e.target === passwordRef.current && e.target.value.length === 0) {
            setPwFocus(false);
            setVisible("hidden");
        }

        if(e.target === emailRef.current && e.target.value.length === 0) {
            setTextFocus(false);
        }
    }

    return (
        <LoginForm 
            handleSubmit={preventSubmit} 
            visible={visible} 
            textFocus={textFocus} 
            pwFocus={pwFocus} 
            handleFocus={handleFocus} 
            handleBlur={handleBlur} 
            emailRef={emailRef}
            passwordRef={passwordRef}
        />
    )
};

export default LoginFormContainer;