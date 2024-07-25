import React from 'react';
import { Grid } from '@mui/material';

export default function MapHeadBand() {
  return (
    <Grid 
      container 
      sx={{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: '10px',
        color:"#666666",
        p : 2
      }}>
      <Grid item  
        sx={{
           color: "black"
        }}>
        <div> PARTICULIER BENEFICIAIRE </div>
      </Grid>
      <Grid item  >
        <div> ADRESSE DES TRAVAUX </div>
      </Grid>
      <Grid item >
        <div> SITUATION FISCALE </div>
      </Grid>
      <Grid item  >
        <div> PROJET </div>
      </Grid>
    </Grid>
  );
}  