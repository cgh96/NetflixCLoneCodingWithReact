import CardTextBox from '../../components/Landing/CardTextBox';
import { useRef, useState, useCallback } from 'react';

const CardTextBoxContainer = () => {
    const [messageVisible, setMessageVisible] = useState(false);
    const [inputValue, setInputValue] = useState(0);
    const emailInput = useRef();
 
    const handleFocus = useCallback( () => {
        setMessageVisible(true);
    }, []);

    const handleBlur = useCallback( () => {
        if(inputValue === 0) {
            setMessageVisible(false);
        }
    }, [inputValue]);

    const handleChange = useCallback( () => {
        emailInput.current && setInputValue(emailInput.current.value.length);
    }, []);
    return (
        <CardTextBox 
            emailInput={emailInput} 
            messageVisible={messageVisible}  
            handleFocus={handleFocus} 
            handleBlur={handleBlur} 
            handleChange={handleChange}
        />
    );
};

export default CardTextBoxContainer;