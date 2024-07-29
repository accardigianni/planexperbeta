import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function HeadBand (){
return (
    <>
    <Box sx={{ height:'auto', width: 'auto', display: 'flex',mt: 3, mb:3 }}>
        <Grid container sx={{ flexdirection:'column'}}>
            <Grid item >
            <Typography variant="h1">
               Projet créé
                </Typography>
            </Grid>
        </Grid>
    </Box>
    </>
)
} 