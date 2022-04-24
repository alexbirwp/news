import styles from './Popup.module.scss'

const Popup = ({shown, closePopup, children}) => {
    const popupClassName = `${styles['popup']} ${shown ? styles['popup_shown'] : ''}`;
    return (
        <div 
        onClick={closePopup}
        className={popupClassName}>
            <div 
            onClick={e => e.stopPropagation()}
            className={styles['popup-content']}>
                {children}
            </div>
        </div>
    )
};


export default Popup;