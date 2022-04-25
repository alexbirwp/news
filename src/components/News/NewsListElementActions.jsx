import crossIcon from "../../assets/imgs/cross-icon.svg"
import checkIcon from "../../assets/imgs/check-icon.svg"
import styles from './NewsListElementActions.module.scss'
import { useDispatch } from "react-redux";
import { remove, toggleActive } from "../../store/newsSlice";
const NewsListElementActions = ({id, active}) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(remove(id));
    }
    const approveHandler = () => {
        dispatch(toggleActive(id));
    }
    return (
        <div 
        className={styles['actions']}>
            <button
            onClick={deleteHandler}
            title="Удалить"
            className={styles['actions-element']}>
                <img 
                src={crossIcon}
                alt="Удалить" />
            </button> 
            {!active && 
            <button
            onClick={approveHandler}
            title="Одобрить"
            className={styles['actions-element']}>
                <img 
                src={checkIcon}
                alt="Одобрить" />
            </button>
            }
        </div>
    );
};


export default NewsListElementActions;