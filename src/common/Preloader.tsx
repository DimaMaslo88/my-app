import React from 'react';
import preloader3 from "../images/preloader.svg";
import Box from "@mui/material/Box";
import { LinearProgress} from "@mui/material";

export const Preloader = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress color='secondary'/>
        </Box>
    );
};

