import { Button } from "@mui/material";
import React from "react";
import ReplayIcon from '@mui/icons-material/Replay';

export const ReturnButton : React.FC = () =>{

    return(
        <>
        <Button 
        variant="contained" 
        sx={{
            width: '150px', 
            height:'50px',  
            textTransform: 'none', 
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            }}  
        startIcon={<ReplayIcon/>}>
        Retour
        </Button>
        </>
    )
}