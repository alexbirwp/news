import { useState } from "react";
import LoginPopup from "../Login/LoginPopup";
import Container from "./Container";
import Header from "./Header";

const Layout = ({children}) => {
    const [showPopup, setShowPopup] =  useState(false);
    return (
        <>
            <Header setShowPopup={() => setShowPopup(true)}/>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <LoginPopup 
            shown={showPopup}
            closePopup={() => setShowPopup(false)}/>
        </>
    )
};


export default Layout;