import React from "react";
import './styleHeadBand.css'
import { Box, Grid } from "@mui/material";

export default function HeadBand (){
return (
    <>
    <Box sx={{ height:'auto', width: 'auto', display: 'flex',mt: 3, mb:3 }}>
        <Grid container sx={{ flexdirection:'column', pl:10}}>
            <Grid item >
                <div style={{fontFamily: "Noto Sans", fontSize: '24px', fontWeight:600, color: 'rgb(127, 127, 127)' }}> Projet crée</div>
            </Grid>
        </Grid>
    </Box>
    </>
)
} 