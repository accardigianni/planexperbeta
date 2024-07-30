import { Grid, TextField } from '@mui/material'
import React from 'react'

export default function TextFieldCustom ()  {
  return (
    <>
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', p: 1, mt: 1 }}>
              <Grid item xs={4}>
                <TextField id="outlined-required" label="Prénom" defaultValue="Adrien" />
              </Grid>
              <Grid item xs={8}>
                <TextField id="outlined-required" label="Nom de famille" defaultValue="Crivellaro" />
              </Grid>
            </Grid>

            <Grid container sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
              <Grid item xs={12}>
                <TextField id="outlined-required" label="Addresss" defaultValue="92, Avenue de Saint-Mandé" />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
              <Grid item xs={3}>
                <TextField id="outlined-required" label="Code postal" defaultValue="75012" />
              </Grid>
              <Grid item xs={9}>
                <TextField id="outlined-required" label="Ville" defaultValue="Paris" />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
              <Grid item xs={7}>
                <TextField id="outlined-required" label="Email" defaultValue="acrivel@gmail.com" />
              </Grid>
              <Grid item xs={5}>
                <TextField id="outlined-required" label="Téléphone" defaultValue="02 40 06 54 75" />
              </Grid>
            </Grid>
    </>
  )
}

