import NewsListElementActions from "./NewsListElementActions";
import styles from './NewsListElement.module.scss'

const NewsListElement = ({element, isAdmin}) => {
    const displayDate = (new Date(element.timestamp)).toLocaleDateString();

    return (
        <div 
        className={styles['newselement']}>
            <div 
            className={styles['newselement-header']}>
                <div 
                className={styles['newselement-info']}>
                    {element.title} <span 
                    className={styles['newselement-date']}>
                        {displayDate}
                    </span>
                </div>
                {isAdmin && 
                <NewsListElementActions 
                active={element.active}
                id={element.id} />}
            </div>
            <div 
            className={styles['newselement-body']}>
                {element.text}
            </div>
        </div>
    )
};


export default NewsListElement;