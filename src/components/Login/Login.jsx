import { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { logInUser } from "../../store/userActions";
import Button from "../Layout/Button";
import styles from './Login.module.scss';

const Login = ({onCancel}) => {
    const dispatch = useDispatch();
    const [
        nameInput,
        nameValue,
        setNameValue,
        setNameError
    ] = useInput('Логин', 'login');
    const [
        passwordInput,
        passwordValue,
        setPasswordValue,
        setPasswordError
    ] = useInput('Пароль', 'password', 'password');
    const [errorText, setErrorText] = useState('');

    const submitFormHandler = async (e) => {
        e.preventDefault();
        const name = nameValue.trim();
        const password = passwordValue.trim();
        setErrorText('');

        if (!password.length || !name.length) {
            if (!name.length) setNameError(true);
            if (!password.length) setPasswordError(true);
            setErrorText('Заполните необходимые поля');
            console.log(errorText);
            return;
        }

        const error = await logInUser(name, password)(dispatch);
        if (error) {
            setErrorText(error);
            return;
        }

        setNameValue('');
        setPasswordValue('')
        onCancel();
    }
    return (
        <form 
        className={styles['form']}
        onSubmit={submitFormHandler}>
            <h3
            className={styles['form-header']}>Войти</h3>
            {nameInput}
            {passwordInput}
            {errorText && 
            <div className={styles['form-error']}>
                {errorText}
            </div>}
            <div 
            className={styles['form-actions']}>
                <Button 
                type="submit">Войти</Button>
                <Button 
                onClick={onCancel}
                useType='cancel' 
                type="button">Отмена</Button>
            </div>
        </form>
    );
};


export default Login;