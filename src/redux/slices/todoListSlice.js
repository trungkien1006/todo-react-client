import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: { 
        todos: [],
        totalPage: 1,
        currentPage: 1,
        limit: 18,
        loading: true
    },
    reducers: {
        changeTodos: (state, action) => {
            return { ...state, todos: action.payload }
        },
        changeTotalPage: (state, action) => {
            return { ...state, totalPage: action.payload }
        },
        changeCurrentPage: (state, action) => {
            return { ...state, currentPage: action.payload }
        },
        increaseCurrentPage: (state) => {
            return state.currentPage == state.totalPage ? state : { ...state, currentPage: state.currentPage + 1 }
        },
        reduceCurrentPage: (state) => {
            return state.currentPage == 1 ? state : { ...state, currentPage: state.currentPage - 1 }
        },
        changeLoading: (state, action) => {
            return { ...state, loading: action.payload }
        },
        addTodo: (state, action) => {
            return { ...state, todos: [...state.todos, { ...action.payload } ] }
        },
        deleteTodo: (state, action) => {
            return { ...state, todos: state.todos.filter(item => item.ID !== action.payload) }
        }
    },
});

// Xuất actions
export const { changeTodos, changeTotalPage, changeCurrentPage, increaseCurrentPage, reduceCurrentPage, changeLoading, addTodo, deleteTodo } = todoListSlice.actions;

// Xuất reducer
export default todoListSlice.reducer;
