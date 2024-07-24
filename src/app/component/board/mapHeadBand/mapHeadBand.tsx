import React from 'react';
import { Box, Grid } from '@mui/material';

export default function MapHeadBand() {
    return (<>
        <Grid item >
          <Box sx={{
            borderBottom: '2px solid black', 
            paddingBottom: 2,}}  >
            <div>PARTICULIER BENEFICIAIRE</div>
          </Box>
        </Grid>
        <Grid item sx={{color:"#666666"}}>
          <Box >
            <div>ADRESSE DES TRAVAUX</div>
          </Box>
        </Grid>
        <Grid item sx={{color:"#666666"}}>
          <Box >
            <div>SITUATION FISCALE</div>
          </Box>
        </Grid>
        <Grid item sx={{color:"#666666"}}>
          <Box >
            <div>PROJET</div>
          </Box>
        </Grid>
        </>
    )}