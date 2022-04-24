import { Link } from "react-router-dom";
import logo from '../../assets/imgs/logo.svg'
import Button from "./Button";
import Container from "./Container";
import styles from './Header.module.scss';

const Header = ({setShowPopup}) => {
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
                        <Button onClick={setShowPopup}>Вход</Button>
                    </li>
                </ul>
            </nav>
        </Container>
    </header>
    )
};


export default Header;