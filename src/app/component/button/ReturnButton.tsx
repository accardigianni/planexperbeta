import { Button } from "@mui/material";
import React from "react";
import ReplayIcon from '@mui/icons-material/Replay';

export const ReturnButton : React.FC = () =>{

    return(
        <>
        <Button 
        variant="contained"  
        startIcon={<ReplayIcon/>}>

        Retour
        </Button>
        </>
    )
}