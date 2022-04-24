import Popup from "../Layout/Popup";
import Login from "./Login";

const LoginPopup = ({shown, closePopup}) => {
    return (
        <Popup 
        closePopup={closePopup}
        shown={shown}>
            <Login onCancel={closePopup}/>
        </Popup>
    )
};


export default LoginPopup;