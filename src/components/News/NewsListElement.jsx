import NewsListElementActions from "./NewsListElementActions";

const NewsListElement = ({element, isAdmin}) => {
    const displayDate = (new Date(element.timestamp)).toLocaleDateString();

    return (
        <div>
            <div>
                <div>
                    {element.title}
                    <span>{displayDate}</span>
                </div>
                {isAdmin && <NewsListElementActions id={element.id} />}
            </div>
            <div>
                {element.text}
            </div>
        </div>
    )
};


export default NewsListElement;