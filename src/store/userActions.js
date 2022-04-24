import { logIn, setLoginError } from "./userSlice";

//без бэкенда
const users = [
    {
        login: 'user', 
        password: 'user',
        role: 'user'
    },
    {
        login: 'admin', 
        password: 'admin',
        role: 'admin'
    }
]


export const logInUser = (login, password) => {
    return (dispatch) => {
        const currentUser = users.find(user => user.login === login);
        if (!currentUser || currentUser.password !== password) {
            return 'Неверный логин или пароль';
        }
        
        dispatch(logIn({login: currentUser.login, role: currentUser.role}))
    }
}