import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobsList from "./JobCard";
const fetchJobs = () => {
    console.log("sdfsd hijsdf");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({ limit: 10, offset: 0 });
    const requestOptions = { method: "POST", headers: myHeaders, body };

    return (dispatch) => {
        fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch({ type: "SET_JOBS", payload: data });
            })
            .catch((error) => console.error(error));
    };
};

const JobBoard = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.jobs);
    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <div>
            <JobsList jobs={jobs} />
        </div>
    );
};

export default JobBoard;
