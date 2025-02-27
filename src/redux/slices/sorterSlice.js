import { createSlice } from "@reduxjs/toolkit";

const sorterSlice = createSlice({
    name: "sorter",
    initialState: { 
        type: "none" 
    },
    reducers: {
        changeSortType: (state, action) => {
            return { type: action.payload }
        }
    },
});

// Xuất actions
export const { changeSortType } = sorterSlice.actions;

// Xuất reducer
export default sorterSlice.reducer;
