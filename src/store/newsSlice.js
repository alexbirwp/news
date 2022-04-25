import { createSlice } from "@reduxjs/toolkit";


export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        loading: true,
    },
    reducers: {
        update: (state, action) => {
            state.news = action.payload;
            state.loading = false;
        },
        add: (state, action) => {
            state.news = [...state.news, {
                ...action.payload,
                id: Date.now(),
                active: false,
                timestamp: Date.now()
            }];
        },
        remove: (state, action) => {
            const newNews = state.news.filter(
                ({id}) => id !== action.payload
            );
            state.news = newNews;
        },
        toggleActive: (state, action) => {
            const newsIndex = state.news.findIndex(
                ({id}) => id === action.payload
            );
            const currentNews = state.news[newsIndex];
            state.news = [
                ...state.news.slice(0, newsIndex),
                {
                    ...currentNews,
                    active: !currentNews.active
                },
                ...state.news.slice(newsIndex + 1),
            ];
        }
    }
});

export const { update, add, remove, toggleActive } = newsSlice.actions;

export default newsSlice.reducer;