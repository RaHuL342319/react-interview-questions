import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state) => {
            state.count += 1;
        },
        decrease: (state) => {
            state.count -= 1;
        }
    }
});

export const { increase, decrease } = countSlice.actions;
export default countSlice.reducer;