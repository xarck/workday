import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
};

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_JOBS":
            return {
                ...state,
                jobs: action.payload,
            };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: {
        jobs: jobsReducer,
    },
});

export default store;
