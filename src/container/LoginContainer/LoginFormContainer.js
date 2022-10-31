import LoginForm from '../../components/Login/LoginForm';
import { useState, useRef } from 'react';
const LoginFormContainer = () => {
    const [visible, setVisible] = useState("hidden");
    const [textFocus, setTextFocus] = useState(false);
    const [pwFocus, setPwFocus] = useState(false);
    const [pwType, setPwType] = useState("password");

    const pwRef = useRef();
   
    const pwCtrl = () => {
        pwType ==="password" ? setPwType("text") : setPwType("password");
    }

    const preventSubmit = (e) => {
        e.preventDeafult();
    }

    const handleFocus = (type) => {
      if(type==="password") {
        setPwFocus(true);
        setVisible("visible");
      } else {
        setTextFocus(true);
      }
    }

    const handleBlur = (type) => {
        if(type === "password" && pwRef.current.value.length === 0) {
            setVisible("hidden");
            setPwFocus(false);
        } else {
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
            pwCtrl={pwCtrl}
            pwType={pwType}
            pwRef={pwRef}
        />
    )
};

export default LoginFormContainer;