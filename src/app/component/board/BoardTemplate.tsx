import React from 'react';
import { Box, Grid, TextField } from '@mui/material';
import MapHeadBand from './mapHeadBand/mapHeadBand';
import TextFielHeadBand from './textfieldHeadBand/textfieldHeadBand';
import TextFieldCustom from './textfield/texfield';

export default function BoardBeneficiaryInfo() {
  return (
    <>
      <Box
        sx={{
          borderRadius: 1,
          height: '90%',
          width: '90%',
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'column',
        }}
      >
        <MapHeadBand />
        <Grid container sx={{ flexDirection: 'row', p: 3, height: '100%', width: '100%' }}>
          <Grid container xs={6} sx={{ flexDirection: 'column', p: 1 }}>
            
            <TextFielHeadBand/>
            <TextFieldCustom/>
          </Grid>

          <Grid
            container
            xs={6}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%'}}>
            <Box sx={{ border: '2px solid blue' ,width:'95%' , height: '95%' }}>
              <div>emplacement de la carte, utiliser toolpad studio editor</div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
