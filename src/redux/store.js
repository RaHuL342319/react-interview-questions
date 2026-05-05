import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";

const store = configureStore({
    reducer: {
        counter: countReducer
    }
});

export default store;