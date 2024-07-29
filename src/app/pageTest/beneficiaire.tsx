
import React from 'react';
import Navbar from '../component/navbar/Navbar';
import HeadBand from '../component/headBandProjectCréer/headBand';
import BoardBeneficiaryInfo from '../component/board/particulierBeneficiaire/BoardTemplate';
import CommercialText from '../component/CommercialText/commercialTextfiel';
import { Box, Grid } from '@mui/material';

export default function Beneficiaire() {
    return (
      
        <Box sx={{height:'100%', width:'100%', backgroundColor: '#ebebeb'}}>
          <Grid container sx={{flexDirection:'column'}} >
            
            <Grid item xs={12}>
              <Navbar/>
            </Grid>
            <Grid item sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', pb:2 , pl:9   }}>
              <HeadBand/>
            </Grid>
            <Grid item  sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <CommercialText/>
            </Grid>

            <Grid item sx={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <BoardBeneficiaryInfo/>
            </Grid>
          </Grid>
        </Box>
    );
  }
