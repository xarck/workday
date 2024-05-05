import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsHourglass } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { fetchJobs } from "../reducers/jobReducer";
import filterJobs from "../utils/jobFilter";
const JobBoard = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.jobs);
    const currentPage = useSelector((state) => state.jobs.currentPage);
    const [expandJob, setExpandJob] = useState(null);
    const filtersState = useSelector((state) => state.jobs.filters);

    const filteredJobs = filterJobs(jobs, filtersState);

    const jobFetch = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({ limit: 10, offset: currentPage - 1 });
        const requestOptions = { method: "POST", headers: myHeaders, body };

        fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.jdList);
                dispatch(fetchJobs(data.jdList));
            })
            .catch((error) => console.error(error));
    };
    useEffect(() => {
        jobFetch();
    }, []);

    const handleScroll = useCallback(() => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            jobFetch();
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="bg-white min-h-screen px-5 grid grid-cols-3 gap-5">
            {filteredJobs.length == 0
                ? null
                : filteredJobs.map((job, index) => {
                      return (
                          <div
                              key={job.id}
                              className="w-full h-fit shadow-md border border-[#e9e9e9]  rounded-xl p-4 flex flex-col"
                          >
                              <div className="text-[#121212] font-normal border border-[#e9e9e9] rounded-full flex gap-2 px-2 w-fit items-center mb-4">
                                  <BsHourglass /> Posted 10 days ago
                              </div>
                              <div className="flex gap-3 items-start mb-2">
                                  <img
                                      src={job.logoUrl}
                                      height={60}
                                      width={60}
                                      alt="logo"
                                      className="rounded-md"
                                  />
                                  <div className="flex flex-col">
                                      <span className="text-[#929292] font-medium text-lg">
                                          {job.companyName}
                                      </span>
                                      <span className="text-[#373737] font-normal text-lg capitalize">
                                          {job.jobRole}
                                      </span>
                                      <span className="text-black font-medium text-lg capitalize">
                                          {job.location}
                                      </span>
                                  </div>
                              </div>
                              <div className="flex items-center gap-2 text-[#929292] text-lg font-medium mb-4">
                                  Estimated Salary: <FaIndianRupeeSign />{" "}
                                  {job.minJdSalary ?? 0}-{job.maxJdSalary} LPA
                                  <div className="bg-[#01b501] text-white w-fit rounded-md">
                                      <TiTick />
                                  </div>
                              </div>
                              <span className="text-black text-xl font-medium">
                                  About Company:
                              </span>
                              <span className="text-black text-lg font-semibold">
                                  About us
                              </span>
                              <div
                                  className={`relative text-black text-lg font-normal mb-4 ${
                                      expandJob === index
                                          ? "h-fit"
                                          : "max-h-44 overflow-y-hidden"
                                  }`}
                              >
                                  {job.jobDetailsFromCompany}
                                  {expandJob !== index && (
                                      <div className="absolute z-10 top-28 h-28 bg-white   filter blur-xl w-full"></div>
                                  )}
                              </div>
                              {expandJob !== index && (
                                  <h2
                                      onClick={() => {
                                          setExpandJob(index);
                                      }}
                                      className="text-center text-lg text-[#6d68e2] font-light -mt-6 cursor-pointer"
                                  >
                                      View Job
                                  </h2>
                              )}

                              <div className="text-[#929292] text-lg font-medium">
                                  Minimum Experience
                              </div>
                              <div className="text-black text-lg font-medium">
                                  {job.minExp} years
                              </div>
                              <button className="w-full bg-[#54efc3] text-black font-medium text-lg mb-2 py-2 rounded-md">
                                  Easy Apply
                              </button>
                              <button className="w-full bg-[#4943da] text-white font-light text-lg py-2 rounded-md">
                                  Unlock referral asks
                              </button>
                          </div>
                      );
                  })}
        </div>
    );
};

export default JobBoard;
