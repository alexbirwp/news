import Container from "./Container";
import Header from "./Header";

const Layout = ({children}) => (
    <>
        <Header />
        <main>
            <Container>
                {children}
            </Container>
        </main>
    </>
);


export default Layout;