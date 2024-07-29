import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ReturnButton } from "../button/ReturnButton";
import { ContinueButton } from "../button/ContinueButton";

export default function CommercialTextField(){
    return(
        <>
        <Box sx={{height:'100%', width:'90%', mt:3, mb:2  }}>
            <Grid container sx={{flexDirection: 'row', display:' flex',  alignItems: 'center' }}>
                <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent:'start' }} >
                    <Typography variant="h2">
                        Commercial
                    </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1, gap:2 }}>
                    <ReturnButton />
                    <ContinueButton />
                </Grid>
            </Grid>
        </Box>
        </>
    )
}