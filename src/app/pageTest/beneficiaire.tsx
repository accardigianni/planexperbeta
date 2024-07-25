
import React from 'react';
import Navbar from '../component/navbar/Navbar';
import HeadBand from '../component/headBandProjectCréer/headBand';
import { ReturnButton } from '../component/button/ReturnButton';
import { ContinueButton } from '../component/button/ContinueButton';
import BoardBeneficiaryInfo from '../component/board/BoardTemplate';
import CommercialText from '../component/CommercialText/commercialTextfiel';
import { Box, Container, Grid } from '@mui/material';

export default function Beneficiaire() {
    return (
      
        <Box sx={{height:'100%', width:'100%',border:'2px solid red', backgroundColor: '#ebebeb'}}>
          <Grid container sx={{flexDirection:'column'}} >
            <Grid item xs={12}>
              <Navbar/>
            </Grid>
            <Grid item sx={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', p:2,   }}>
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
