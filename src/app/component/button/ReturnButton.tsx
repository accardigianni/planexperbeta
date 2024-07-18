import { Button } from "@mui/material";
import React from "react";
import ReplayIcon from '@mui/icons-material/Replay';

export const ReturnButton : React.FC = () =>{

    return(
        <>
        <Button 
        variant="contained" 
        sx={{
            backgroundColor : '#f6c042', 
            width: '150px', 
            height:'50px',  
            textTransform: 'none', 
            fontSize:'11px'
            }}  
        startIcon={<ReplayIcon/>}>
        Retour
        </Button>
        </>
    )
}