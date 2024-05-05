import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    filters: {
        role: "",
        noOfEmployees: "",
        experience: "",
        remote: "",
        minimumPay: "",
        searchCompany: "",
    },
    currentPage: 1,
};

export const jobSlice = createSlice({
    name: "Jobs",
    initialState,
    reducers: {
        fetchJobs: (state, action) => {
            state.jobs = [...state.jobs, ...action.payload];
            state.currentPage += 1;
        },
        applyFilter: (state, action) => {
            state.filters = action.payload;
        },
    },
});

export const { fetchJobs, applyFilter } = jobSlice.actions;

export default jobSlice.reducer;
