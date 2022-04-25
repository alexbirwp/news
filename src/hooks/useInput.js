import { useState } from "react";
import styles from './useInput.module.scss'

const useInput = (
    inputLabel,
    inputId,
    inputType = 'text'
) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const inputChangeHandler = e => {
        setValue(e.target.value)
        setError(false);
    }

    const inputElement = inputType !== 'textarea' ? (
        <input 
        className={styles['input-element']}
        value={value}
        onChange={inputChangeHandler}
        type={inputType} />
    ) : (
        <textarea 
        className={styles['input-element']}
        value={value}
        onChange={inputChangeHandler}></textarea>
    );

    const input = (
        <div className={`${styles['input']} ${error ? styles['input_error'] : ''}`}>
            <label 
            className={styles['input-label']} 
            htmlFor={inputId}>
                {inputLabel}
            </label>
            {inputElement}
        </div>
    );

    return [
        input,
        value,
        setValue,
        setError
    ];
};


export default useInput;