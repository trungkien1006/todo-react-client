import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: { 
        todos: [],
        totalPage: 1,
        loading: true
    },
    reducers: {
        changeTodos: (state, action) => {
            return { ...state, todos: action.payload }
        },
        changeTotalPage: (state, action) => {
            return { ...state, totalPage: action.payload }
        },
        changeLoading: (state, action) => {
            return { ...state, loading: action.payload }
        }
    },
});

// Xuất actions
export const { changeTodos, changeTotalPage, changeLoading } = todoListSlice.actions;

// Xuất reducer
export default todoListSlice.reducer;
