import React, { useState } from "react";
import {
    Box,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Slider,
    Checkbox,
    FormGroup,
    Button,
    FormControlLabel,
} from "@mui/material";

const FilterBar = ({ onFilterChange }) => {
    const [minExp, setMinExp] = useState(0);
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [isRemote, setIsRemote] = useState(false);
    const [techStack, setTechStack] = useState([]);
    const [role, setRole] = useState("");
    const [minBasePay, setMinBasePay] = useState(0);

    const handleFilter = () => {
        onFilterChange({
            minExp,
            companyName,
            location,
            isRemote,
            techStack,
            role,
            minBasePay,
        });
    };

    return (
        <Box p={2} sx={{ display: "flex", flexWrap: "wrap" }}>
            <Typography variant="h6" gutterBottom>
                Filters
            </Typography>
            <TextField
                label="Minimum Experience (years)"
                type="number"
                value={minExp}
                onChange={(e) => setMinExp(e.target.value)}
                margin="normal"
                sx={{ flexGrow: 1, marginRight: 1 }} // Adjust margin as needed
            />
            <TextField
                label="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                margin="normal"
                sx={{ flexGrow: 1, marginRight: 1 }}
            />
            <TextField
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                margin="normal"
                sx={{ flexGrow: 1, marginRight: 1 }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isRemote}
                        onChange={(e) => setIsRemote(e.target.checked)}
                        color="primary"
                    />
                }
                label="Remote"
                sx={{ marginRight: 1 }}
            />
            {/* ... other filter fields (similar structure with sx prop) */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleFilter}
                sx={{ marginLeft: "auto" }}
            >
                Apply Filters
            </Button>
        </Box>
    );
};

export default FilterBar;
