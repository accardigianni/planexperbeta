import React from 'react';
import { Box, Grid } from '@mui/material';
import MapHeadBand from './mapHeadBand/mapHeadBand';


export default function BoardBeneficiaryInfo() {
  return (
    <>
    <Box
      sx={{
        height: "90%",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'white'
      }}>
        <Grid container direction="row" spacing={2} 
        sx={{ 
        justifyContent: "flex-end",
        pr: 10 ,
        mt:2, 
        fontFamily:'Roboto',
        fontSize: '20px',
        fontWeight: '600', }}>
      <MapHeadBand/>
      </Grid>
      
    </Box>
    </>
  );
}





//  {/* je declare deux lignes */}
//  <Grid container direction="row" >
//  <Grid xs={12} >
//    <span style={{justifyContent:"center"}}> Les informations au dessus de la carte</span>
//  </Grid>
//  <Grid xs={12} sx={{ border: '1px solid black' }}>
//    {/* dans ma 2eme ligne je declare des colonnes qui feront toute la longueur de mes lignes */}
//    <Grid container xs={12} direction='column' sx={{ border: '1px solid red ' }}>
//        <Grid sx={{  border: '1px solid yellow'}}>
//          <span>une ecriture</span>
//        </Grid>
//        <Grid sx={{ }}>
//          <span>une ecriture</span>
//        </Grid>
       
//    </Grid>
//  </Grid>
// </Grid>








{/* <TextField
                  id="outlined-required"
                  label="Prénom"
                  defaultValue="Adrien"
                /> */}

{/* <TextField
                  id="outlined-required"
                  label="Nom de famille"
                  defaultValue="Crivellaro"
                /> */}

{/* <TextField
                  id="outlined-required"
                  label="Addresss"
                  defaultValue="92, Avenue de Saint-Mandé"
                />
                <TextField
                  id="outlined-required"
                  label="Code postal"
                  defaultValue="75012"
                />
                <TextField
                  id="outlined-required"
                  label="Ville"
                  defaultValue="Paris"
                />
                <TextField
                  id="outlined-required"
                  label="Email"
                  defaultValue="acrivel@gmail.com"
                />
                <TextField
                  id="outlined-required"
                  label="Téléphone"
                  defaultValue="02 40 06 54 75"
                /> */}



  //   <>
  //   <Box sx={{
  //           height: "100%",
  //           width: "100%",
  //           display: "flex",
  //           flexDirection: "row",
  //           alignItems: "center",
  //           backgroundColor: 'white'
  //         }}>
  //     {/* <Box sx={{
  //       height : '100%', 
  //       width: '50%',
  //       flexDirection: 'column'
  //       }}> */}
  //         <Grid container spacing={2}>
  //           <span style={{
  //           fontFamily:'Noto Sans',
  //           fontSize: '30px',
  //           fontWeight: 600,
  //           }}> 
  //           PARTICULIER BENEFICIAIRE  
  //           </span>
  //           <ModeEditOutlineIcon style={{
  //             border: '1px solid',
  //             borderRadius: '5px',
  //             marginLeft: "10px",
  //             fontSize: '20px',
  //             color: 'grey'
  //           }} />
  //           <br />
  //           <span style={{
  //           fontFamily:'Roboto',
  //           fontSize: '12px',
  //           }}>
  //             pour modifier appuyer avec le stylo
  //           </span>
  //         </Grid>
         
          
         
  //     </Box>
  //     {/* <Box sx={{height : '100%', width: '50%'}} >
  //      particulier beneficiaire
  //     </Box> */}
  //   {/* </Box> */}
   
  //   </>
  
  // )}

