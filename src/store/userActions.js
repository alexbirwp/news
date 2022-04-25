import { logIn } from "./userSlice";

//без бэкенда
const users = [
    {
        login: 'user', 
        password: 'user',
        role: 'user',
    },
    {
        login: 'admin', 
        password: 'admin',
        role: 'admin',
    }
]

// имитация задежки от сервера
const imitPending = new Promise(res => setTimeout(res, 2000));


export const logInUser = (login, password) => {
    return async (dispatch) => {
        const currentUser = users.find(user => user.login === login);
        await imitPending;
        if (!currentUser || currentUser.password !== password) {
            return 'Неверный логин или пароль';
        }
        
        dispatch(logIn({
            login: currentUser.login, 
            role: currentUser.role
        }))
    }
}