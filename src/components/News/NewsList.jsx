import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/newsActions";
import styles from './NewsList.module.scss';
import NewsListElement from "./NewsListElement";

const NewsList = () => {
    const dispatch = useDispatch();
    const { news, user } = useSelector(state => state);
    const isUserAdmin = user.role === 'admin';
    useEffect(() => {
        if (news.loading) {
            console.log(1);
            fetchNews()(dispatch)
        }
    }, [dispatch, news.loading]);

    const filteredNews = isUserAdmin ? 
    news.news :
    news.news.filter(currNews => /*currNews.active*/ true);
    return (
        <div className={styles.newslist}>
            {filteredNews.map(currentNews => 
            <NewsListElement 
            idAdmin={isUserAdmin}
            element={currentNews}
            key={currentNews.id} />)
            }
        </div>
    );
};


export default NewsList;