import { Button } from "@mui/material";
import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export const ContinueButton : React.FC = () =>{

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
        startIcon={<ArrowCircleRightIcon />}>
        Continuer
        </Button>
        </>
    )
}
