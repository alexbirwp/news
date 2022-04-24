import { useSelector } from "react-redux";

const MainPage = () => {
    const {login} = useSelector(state => state.user);

    return (
        <h1>Привет, {login === null ? 'Гость' : login}</h1>
    );
};


export default MainPage;