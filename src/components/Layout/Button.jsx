import styles from './Button.module.scss';

const Button = ({children, useType, ...props}) => {
    const fullClassName = `${styles.button} ${useType ?  styles[useType] : ''}`
    return (
        <button 
        className={fullClassName}
        {...props}>{children}</button>
    )
};


export default Button;
