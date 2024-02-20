import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const contentSlice = createSlice({
    name: 'contents',
    initialState: {
        content: '',
        date: '',
        company: '',
        branch: '',
        dataList: [], // Yeni bir veri listesi eklendi
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
            // Yeni bir öğe oluştur ve dataList'e ekle
            const newContent = {
                id: state.dataList.length + 1, // Yeni id oluştur
                content: state.content,
                date: dayjs(state.date).format('DD.MM.YYYY'),
                company: state.company,
                branch: state.branch,
            };
            state.dataList.push(newContent);
        
            // State'i sıfırla
            state.content = '';
            state.date = '';
            state.company = '';
            state.branch = '';
        },
        
        removeContent: (state, action) => {
            // Silinecek öğenin id'sini al
            const id = action.payload;
        
            // Silinecek öğenin index'ini bul
            const index = state.dataList.findIndex((item) => item.id === id);
        
            // Bulunan index'teki öğeyi sil
            state.dataList.splice(index, 1);
        }
    },
});

export const { setContent, setDate, setCompany, setBranch, addContent , removeContent } = contentSlice.actions;
export default contentSlice.reducer;
