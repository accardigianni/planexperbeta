import React from 'react';
import { Box, Grid, TextField } from '@mui/material';
import MapHeadBand from './mapHeadBand/mapHeadBand';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';


export default function BoardBeneficiaryInfo() {
  return (
    <>
    <Box
      sx={{
        borderRadius:1,
        height:'90%',
        width: "90%",
        display: "flex",
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
        <MapHeadBand />
      <Grid container sx={{ flexDirection: 'row',p:3, height: '100%', width:'100%'}}> 

        <Grid container xs={6} sx={{flexDirection: 'column', border: '2px solid blue' }}>
          <Grid container sx={{flexDirection:'row'}}>
            <Grid item sx={{
              display: 'flex',           
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily:'Noto Sans',
              fontSize: '26px',
              fontWeight: '600',
              height: 'auto'}}>
              <div>PARTICULIER BENEFICIAIRE</div>
              <ModeEditOutlineIcon style={{
                border: '1px solid',
                borderRadius: '5px',
                marginLeft: "10px",
                fontSize: '20px',
                color: 'grey',
                alignItems: 'center'}} />
            </Grid>
            <Grid item   >
              <div> Pour modifier, appuyer sur le stylo</div>
            </Grid>
          </Grid>



          <Grid container spacing={2}  sx={{display: 'flex' ,flexDirection:'row', p:1,mt:3}}>
            <Grid item xs={4}>
              <TextField
                  id="outlined-required"
                  label="Prénom"
                  defaultValue="Adrien"/> 
            </Grid>
            <Grid item xs={8} >
            <TextField
                  id="outlined-required"
                  label="Nom de famille"
                  defaultValue="Crivellaro"/> 
            </Grid>
          
          </Grid>

          <Grid item sx={{p:1}}>
          <TextField
                  id="outlined-required"
                  label="Addresss"
                  defaultValue="92, Avenue de Saint-Mandé"/>
          </Grid>

          <Grid container spacing={2}  sx={{display: 'flex' ,flexDirection:'row',p:1}}>
            <Grid item xs={3}> 
              <TextField
                  id="outlined-required"
                  label="Code postal"
                  defaultValue="75012"/>
            </Grid>
            <Grid item xs={9} >
              <TextField
                  id="outlined-required"
                  label="Ville"
                  defaultValue="Paris"/>
            </Grid>
          </Grid>

          <Grid container  spacing={2} sx={{display: 'flex' ,flexDirection:'row', p:1}}>
            <Grid item xs={7}>
              <TextField
                  id="outlined-required"
                  label="Email"
                  defaultValue="acrivel@gmail.com"/>
            </Grid>
            <Grid item xs={5}>
                <TextField
                  id="outlined-required"
                  label="Téléphone"
                  defaultValue="02 40 06 54 75"/>
            </Grid>
          </Grid>
        </Grid>
        



        <Grid container xs={6} sx={{
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid green',
            height:'100%',
            width: "100%"}}>
          <Box sx={{  
            
            border: '2px solid red',
            }}>
              <div>emplacement de la carte </div>
          </Box>
          </Grid>  
      </Grid> 
    </Box> 
    </> 
  );
}

