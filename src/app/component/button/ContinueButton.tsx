import { Button } from "@mui/material";
import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export const ContinueButton : React.FC = () =>{

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
        startIcon={<ArrowCircleRightIcon />}>
        Continuer
        </Button>
        </>
    )
}