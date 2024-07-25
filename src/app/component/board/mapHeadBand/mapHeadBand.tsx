import React from 'react';
import { Grid } from '@mui/material';

export default function MapHeadBand() {
  return (
    <Grid 
      container 
      sx={{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        gap: 5,
        color:"#666666",
        fontSize: '16px', 
        fontWeight:600,
        fontFamily: 'Arial, sans-serif',
        p : 3,
        '& .MuiGrid-item': {
          // Appliquer un padding horizontal pour agrandir les cellules
          paddingLeft: '20px', 
          paddingRight: '20px',
          // Appliquer un padding vertical pour ajuster la hauteur
          paddingTop: '10px', 
          paddingBottom: '10px'
        }
      }}>
      <Grid item  
        sx={{
           color: "black",
           borderBottom: '3px solid black'
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
// regarder les element tabs et tab pour faire cette section