import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const modalSlice = createSlice({
    name: "modal",
    initialState: { 
        isClose: true,
        type: "",
        createTodo: {
            title: "",
            description: "",
            priority: 2,
            due_date: ""
        },
        updateTodo: {
            id: 0,
            title: "",
            description: "",
            priority: 2,
            status: 0,
            due_date: ""
        },
        deleteTodo: {
            id: 0
        }
    },
    reducers: {
        changeModalType: (state, action) => {
            return { ...state, type: action.payload }
        },
        changeIsClose: (state, action) => {
            return { ...state, isClose: action.payload }
        },
        changeCreateTodoTitle: (state, action) => {
            return { ...state, createTodo:{ ...state.createTodo, title: action.payload } }
        },
        changeCreateTodoDescription: (state, action) => {
            return { ...state, createTodo:{ ...state.createTodo, description: action.payload } }
        },
        changeCreateTodoPriority: (state, action) => {
            return { ...state, createTodo:{ ...state.createTodo, priority: Number(action.payload) } }
        },
        changeCreateTodoDueDate: (state, action) => {
            return { ...state, createTodo:{ ...state.createTodo, due_date: action.payload } }
        },
        clearCreateTodo: (state) => {
            return {
                ...state,
                createTodo: {
                    title: "",
                    description: "",
                    priority: 2,
                    due_date: ""
                }
            }
        },
        changeUpdateTodo: (state, action) => {
            return { ...state, updateTodo: action.payload }
        },
        changeUpdateTodoTitle: (state, action) => {
            return { ...state, updateTodo: { ...state.updateTodo, title: action.payload } }
        },
        changeUpdateTodoDescription: (state, action) => {
            return { ...state, updateTodo: { ...state.updateTodo, description: action.payload } }
        },
        changeUpdateTodoPriority: (state, action) => {
            return { ...state, updateTodo: { ...state.updateTodo, priority: Number(action.payload) } }
        },
        changeUpdateTodoDueDate: (state, action) => {
            return { ...state, updateTodo: { ...state.updateTodo, due_date: action.payload } }
        },
        changeUpdateTodoStatus: (state, action) => {
            return { ...state, updateTodo: { ...state.updateTodo, status: Number(action.payload) } }
        },
        changeDeleteTodoId: (state, action) => {
            return { ...state, deleteTodo: { id: action.payload }}
        }
    },
});

// Xuất actions
export const {
    changeModalType,
    changeIsClose, 
    changeCreateTodoTitle, 
    changeCreateTodoDescription, 
    changeCreateTodoPriority, 
    changeCreateTodoDueDate,
    clearCreateTodo, 
    changeUpdateTodo,
    changeUpdateTodoTitle,
    changeUpdateTodoDescription, 
    changeUpdateTodoPriority,
    changeUpdateTodoDueDate, 
    changeUpdateTodoStatus,
    changeDeleteTodoId
} = modalSlice.actions;

// Xuất reducer
export default modalSlice.reducer;
