import styles from './Button.module.scss';

const Button = ({children, className, ...props}) => {
    const fullClassName = `${styles.button} ${className}`
    return (
        <button 
        className={fullClassName}
        {...props}>{children}</button>
    )
};


export default Button;
