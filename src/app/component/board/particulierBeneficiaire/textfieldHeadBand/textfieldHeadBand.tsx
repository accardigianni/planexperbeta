import { Grid, Typography } from '@mui/material'
import React from 'react'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export default function TextFielHeadBand() {
  return (
    <>
    <Grid container sx={{ flexDirection: 'row', alignItems: 'center',pl:1 }}>
              {/* si on retir le xs l'icon reviens se coller a la string, je ne comprend pas pourquoi ?? */}
              <Grid item xs>
                <Typography variant='h3'>
                  PARTICULIER BENEFICIAIRE
                  </Typography>
              </Grid>
              <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <ModeEditOutlineIcon
                  style={{
                    border: '1px solid',
                    borderRadius: '5px',
                    fontSize: '20px',
                    color: 'grey',
                  }}/>
              </Grid>
            </Grid>

            <Grid item sx={{pl:1}} >
              <Typography variant='subtitle1'>
              <div>Pour modifier, appuyer sur le stylo</div>
              </Typography>
            </Grid>
    </>
  )
}
