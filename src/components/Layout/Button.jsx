import styles from './Button.module.scss';

const Button = ({children, useType, className, ...props}) => {
    const fullClassName = `${className || ''} ${styles.button} ${useType ?  styles[useType] : ''}`
    return (
        <button 
        className={fullClassName}
        {...props}>{children}</button>
    )
};


export default Button;
