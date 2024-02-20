import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const contentSlice = createSlice({
    name: 'contents',
    initialState: {
        content: '',
        date: '',
        company: '',
        branch: '',
        dataList: []
    },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        setCompany: (state, action) => {
            state.company = action.payload;
        },
        setBranch: (state, action) => {
            state.branch = action.payload;
        },

        addContent: (state) => {
            if (state.content === '' || state.date === '' || state.company === '' || state.branch === '') {
                return alert('Bütün xanaları doldurun!!!');
            }

            const newContent = {
                id: state.dataList.length + 1, 
                content: state.content,
                date: dayjs(state.date).format('DD.MM.YYYY'),
                company: state.company,
                branch: state.branch,
            };
            state.dataList.push(newContent);

            state.content = '';
            state.date = '';
            state.company = '';
            state.branch = '';
        },



        removeContent: (state, action) => {
            const id = action.payload;
            const index = state.dataList.findIndex((item) => item.id === id);
            state.dataList.splice(index, 1);
        }
    },
});

export const { setContent, setDate, setCompany, setBranch, addContent, removeContent } = contentSlice.actions;
export default contentSlice.reducer;
