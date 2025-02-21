import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: { 
        title: "",
        status: "All",
        priority: 0,
        dateFrom: "",
        dateTo: ""
    },
    reducers: {
        changeTitle: (state, action) => {
            return { ...state, title: action.payload };
        },
        changeStatus: (state, action) => {
            return { ...state, status: action.payload };
        },
        changePriority: (state, action) => {
            return { ...state, priority: Number(action.payload) };
        },
        changeDateFrom: (state, action) => {
            return { ...state, dateFrom: action.payload };
        },
        changeDateTo: (state, action) => {
            return { ...state, dateTo: action.payload };
        },
    },
});

// Xuất actions
export const { changeTitle, changeStatus, changePriority, changeDateFrom, changeDateTo } = filterSlice.actions;

// Xuất reducer
export default filterSlice.reducer;
