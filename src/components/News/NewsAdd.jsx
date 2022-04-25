import { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { add } from "../../store/newsSlice";
import Button from "../Layout/Button";
import styles from '../Login/Form.module.scss';

const NewsAdd = () => {
    const [errorText, setErrorText] = useState('');
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const [
        titleInput,
        titleValue,
        setTitleValue,
        setTitleError,
    ] = useInput('Заголовок новости', 'title');
    const [
        textInput,
        textValue,
        setTextValue,
        setTextError,
    ] = useInput('Текст новости', 'text', 'textarea');

    const submitFormHandler = e => {
        e.preventDefault();
        const title = titleValue.trim();
        const text = textValue.trim();
        setErrorText('');

        if(!title.length || !text.length) {
           if(!title.length) setTitleError(true);
           if(!text.length) setTextError(true);
           setErrorText('Заполните необходимые поля');
           return;
        }

        dispatch(add({
            title,
            text
        }));

        setSuccess(true);
        setTitleValue('');
        setTextValue('');
        setTimeout(() => {
            setSuccess(false);
        }, 5000);
    }
    return (
        <form 
        onSubmit={submitFormHandler}
        className={styles['form']}>
            <h3
            className={styles['form-header']}>Добавить новость</h3>
            {titleInput}
            {textInput}
            {errorText && 
            <div className={styles['form-error']}>
                {errorText}
            </div>}
            {success && 
            <div className={styles['form-success']}>
                Ваша новость отправлена на модерацию!
            </div>}
            <div 
            className={styles['form-actions']}>
                <Button 
                type="submit">Добавить новость</Button>
            </div>
        </form>
    )
};


export default NewsAdd;