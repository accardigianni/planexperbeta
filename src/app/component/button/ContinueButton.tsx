import { Button } from "@mui/material";
import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export const ContinueButton : React.FC = () =>{

    return(
        <>
        <Button 
        variant="contained"  
        startIcon={<ArrowCircleRightIcon />}>
        Continuer
        </Button>
       
        </>
    )
}
