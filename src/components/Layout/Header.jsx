import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../assets/imgs/logo.svg'
import { logOut } from "../../store/userSlice";
import Button from "./Button";
import Container from "./Container";
import styles from './Header.module.scss';

const Header = ({setShowPopup}) => {
    const {login} = useSelector(state => state.user)
    const dispatch = useDispatch();
    const isLoged = login !== null;
    const logout = () => dispatch(logOut()) 

    let logInOutbutton = <Button onClick={setShowPopup}>Вход</Button>;
    if (isLoged) {
        logInOutbutton =  <Button onClick={logout}>Выйти</Button>;
    }
    

    return (
    <header 
    className={styles['header']}>
        <Container>
            <nav 
            className={styles['header-nav']}>
                <Link to='/'>
                    <img 
                    className={styles['header-logo']}
                    src={logo} 
                    alt="logotype" />
                </Link>

                <ul 
                className={styles['header-ul']}>
                    <li>
                        <Link to='/news'>
                            Новости
                        </Link>
                    </li>
                    <li>
                        {logInOutbutton}
                    </li>
                </ul>
            </nav>
        </Container>
    </header>
    )
};


export default Header;