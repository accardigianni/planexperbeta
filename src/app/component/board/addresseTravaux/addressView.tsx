import { Grid, Typography } from '@mui/material'
import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

function AddressView() {

  return (
    <>
    <Grid container sx={{flexDirection: 'column'}} >
        <Grid item sx={{ mt:1, mb:1}}>
            <Typography variant='h3'>
                PAVILLON MEULIERRE
            </Typography>
            <ModeEditOutlineIcon
                  style={{
                    border: '1px solid',
                    borderRadius: '5px',
                    fontSize: '20px',
                    color: 'grey',
                  }}/>
        </Grid>
        <Grid item sx={{ mt:1, mb:1}}>
            <Typography variant='h4'>
            67 Avenue des chiens verts
            <br/>
            97 890 LE BLANC MESNIL
            </Typography>
        </Grid>
        <Grid item sx={{ mt:1, mb:1, display: 'flex', alignItems:'center'}}>
            <Typography variant='h1'>
                REF. CADASTRALE :&nbsp; 
            </Typography>
            <Typography variant='h2'>
                970520000J0022
            </Typography>
        </Grid>
    </Grid>
    </>
    
  )
}

export default AddressView