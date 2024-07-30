
import React from 'react';
import Navbar from '../component/navbar/Navbar';
import HeadBand from '../component/headBandProjectCréer/headBand';
import BoardBeneficiaryInfo from '../component/board/BoardTemplate';
import CommercialText from '../component/CommercialText/commercialTextfiel';
import { Box, Grid } from '@mui/material';

export default function Beneficiaire() {
    return (
      
        <Box sx={{height:'auto', width:'auto', backgroundColor: '#ebebeb', display: 'flex', flexDirection:'column' }}>
          <Grid container sx={{flexDirection:'column', height:'100%', width:'100%'}} >
              <Navbar/>
            <Grid item sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',display:'flex', alignItems: 'center', justifyContent: 'center', pb:2 }}>
              <HeadBand/>
            </Grid>
            <Grid item  sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <CommercialText/>
            </Grid>
            <Grid item sx={{display:'flex', alignItems: 'center', justifyContent: 'center', mb:24}}>
              <BoardBeneficiaryInfo/>
            </Grid>
          </Grid>
        </Box>
    );
  }
