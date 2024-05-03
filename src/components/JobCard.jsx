import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Button,
} from "@mui/material";

const JobCard = ({ job }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "primary.main",
                    color: "text.primary",
                }}
            >
                <CardMedia
                    sx={{ pt: "56.25%" }} // 16:9 aspect ratio
                    image={job.logoUrl}
                    title={job.companyName}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {job.jobRole} at {job.companyName}
                    </Typography>
                    <Typography>Location: {job.location}</Typography>
                    <Typography>
                        Experience: {job.minExp} - {job.maxExp} years
                    </Typography>
                    <Typography>
                        Salary: ${job.minJdSalary} - ${job.maxJdSalary}{" "}
                        {job.salaryCurrencyCode}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2 }}
                    >
                        Apply Now
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

const JobsList = ({ jobs }) => {
    console.log("xsfsdf", jobs);
    return (
        <Grid container spacing={4}>
            {jobs == undefined
                ? null
                : jobs.jdList.map((job) => (
                      <JobCard key={job.jdUid} job={job} />
                  ))}
        </Grid>
    );
};

export default JobsList;
