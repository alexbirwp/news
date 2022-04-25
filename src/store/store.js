import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import newsReducer from './newsSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer
    }
})