import { Link } from "react-router-dom";
import logo from '../../assets/imgs/logo.svg'
import Container from "./Container";

const Header = () => {
    return (
    <header>
        <Container>
            <nav>
                <Link to='/'>
                    <img 
                    src={logo} 
                    alt="logotype" />
                </Link>

                <ul>
                    <li>
                        <Link to='/news'>
                            Новости
                        </Link>
                    </li>
                    <li>
                        <button>вход/выход</button>
                    </li>
                </ul>
            </nav>
        </Container>
    </header>
    )
};


export default Header;