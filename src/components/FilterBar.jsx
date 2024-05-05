import { useDispatch, useSelector } from "react-redux";
import { applyFilter } from "../reducers/jobReducer";
import { useEffect } from "react";
const FilterBar = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.jobs.filters);
    useEffect(() => {
        console.log("sdf");
        console.log(filters);
    }, []);
    const handleFilterChange = (e) => {
        dispatch(applyFilter({ ...filters, [e.target.name]: e.target.value }));
    };

    return (
        <div className="flex gap-2 mb-14">
            <select
                name="role"
                id="role"
                className="w-20 px-2 py-2 outline-none border-2 border-[#e9e9e9] rounded-md"
                value={filters.role}
                onChange={handleFilterChange}
            >
                <option value="">Role</option>
                <option value="Android">Android</option>
                <option value="Frontend">Frontend</option>
                <option value="IOS">IOS</option>
            </select>
            {/* <select
                name="noOfEmployees"
                id="noOfEmployees"
                className="w-1/6 px-2 py-2 outline-none border-2 border-[#e9e9e9] rounded-md"
                value={filters.noOfEmployees}
                onChange={handleFilterChange}
            >
                <option value="">Number Of Employees</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
            </select> */}
            <select
                name="experience"
                id="experience"
                className="w-1/6 px-2 py-2 outline-none border-2 border-[#e9e9e9] rounded-md"
                value={filters.experience}
                onChange={handleFilterChange}
            >
                <option value="">Experience</option>
                <option value="1">0-1 year</option>
                <option value="3">1-3 years</option>
                <option value="5">3-5 years</option>
                <option value="6">5+ years</option>
            </select>
            {/* <select
                name="remote"
                id="remote"
                className="w-1/6 px-2 py-2 outline-none border-2 border-[#e9e9e9] rounded-md"
                value={filters.remote}
                onChange={handleFilterChange}
            >
                <option value="">Remote</option>
                <option value="true">Remote</option>
                <option value="false">On-site</option>
            </select> */}
            <select
                name="minimumPay"
                id="minimum Pay"
                className="w-1/5 px-2 py-2 outline-none border-2 border-[#e9e9e9] rounded-md"
                value={filters.minimumPay}
                onChange={handleFilterChange}
            >
                <option value="">Minimum Base Pay Salary</option>
                <option value="5">5 LPA</option>
                <option value="10">10 LPA</option>
                <option value="15">15 LPA</option>
                <option value="25">25 LPA</option>
                <option value="50">50 LPA</option>
            </select>
            <input
                id="search"
                name="searchCompany"
                placeholder="Search Company Name"
                className="w-1/6 px-2 py-2 outline-none border-2 border-[#e9e9e9] rounded-md"
                value={filters.searchCompany}
                onChange={handleFilterChange}
            />
        </div>
    );
};

export default FilterBar;
