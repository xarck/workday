const filterJobs = (jobs, filters) => {
    return jobs.filter((job) => {
        const {
            role,
            noOfEmployees,
            experience,
            remote,
            minimumPay,
            searchCompany,
        } = filters;

        // Filter by role
        if (role && job.jobRole.toLowerCase() !== role.toLowerCase()) {
            return false;
        }

        // Filter by number of employees
        // Assuming you have this information in the job object

        // Filter by experience
        if (experience) {
            const [minExp, maxExp] = experience.split("-");
            const jobMinExp = job.minExp;
            const jobMaxExp = job.maxExp;
            if (
                jobMinExp < parseInt(minExp) ||
                (jobMaxExp && jobMaxExp > parseInt(maxExp))
            ) {
                return false;
            }
        }

        // Filter by remote
        // Assuming you have this information in the job object

        // Filter by minimum pay
        if (
            minimumPay &&
            (job.minJdSalary === null || job.minJdSalary < parseInt(minimumPay))
        ) {
            return false;
        }

        // Filter by company name
        if (
            searchCompany &&
            !job.companyName.toLowerCase().includes(searchCompany.toLowerCase())
        ) {
            return false;
        }

        return true;
    });
};

export default filterJobs;
