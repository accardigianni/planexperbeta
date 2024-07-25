import { Grid } from '@mui/material'
import React from 'react'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export default function TextFielHeadBand() {
  return (
    <>
    <Grid container sx={{ flexDirection: 'row', alignItems: 'center', pl:1 }}>
              {/* si on retir le xs l'icon reviens se coller a la string, je ne comprend pas pourquoi ?? */}
              <Grid item xs>
                <div style={{ fontFamily: 'Noto Sans', fontSize: '26px', fontWeight: '600' }}>
                  PARTICULIER BENEFICIAIRE
                </div>
              </Grid>
              <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <ModeEditOutlineIcon
                  style={{
                    border: '1px solid',
                    borderRadius: '5px',
                    fontSize: '20px',
                    color: 'grey',
                  }}
                />
              </Grid>
            </Grid>

            <Grid item sx={{ fontSize: '12px', paddingLeft: '8px' }}>
              <div>Pour modifier, appuyer sur le stylo</div>
            </Grid>
    </>
  )
}
