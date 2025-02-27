import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: { 
        title: "",
        status: -1,
        priority: 0,
        dateFrom: "",
        dateTo: "",
        time: "none"
    },
    reducers: {
        changeTitle: (state, action) => {
            return { ...state, title: action.payload };
        },
        changeStatus: (state, action) => {
            return { ...state, status: Number(action.payload) };
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
        changeTimeType: (state, action) => {
            return { ...state, time: action.payload }
        }
    },
});

// Xuất actions
export const { changeTitle, changeStatus, changePriority, changeDateFrom, changeDateTo, changeTimeType } = filterSlice.actions;

// Xuất reducer
export default filterSlice.reducer;
