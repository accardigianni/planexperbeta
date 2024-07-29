'use client';  
import { BorderColor } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // palette de couleur par default
  palette: {
    primary: {
      main: '#f6c042',
    },
    secondary:{
      main:'#283e50'
    }
  }, 
  // typo par defaut
  typography:{
    fontFamily: 'Noto+Sans',
    // 100 to 900
    fontWeightLight: '300',   // poids léger
    fontWeightRegular: '400', // poids régulier
    fontWeightMedium: '500',  // poids moyen
    fontWeightBold: '600',    // poids gras

    // typo de headBand.tsx
    h1:{
      fontSize: '1.5rem',
      fontWeight: 600,
      color : 'rgb(127, 127, 127)',

    //   '@media (min-width:600px)'
     },
     // typo de textCommercial.tsx
     h2:{
      fontSize: '26px',
      fontWeight: 600,
      color : 'rgb(0,0,0)'
    //   '@media (min-width:600px)'
     },
     // typo entête textfieldHandBand.tsx
     h3:{
      fontFamily: 'Noto Sans', 
      fontSize: '32px', 
      lineHeight: '24px',
      fontWeight: '600'
     },
     subtitle1:{
      fontSize: '12px'
     }
  },
  components:{
    // custom button
    MuiButton:{
      styleOverrides:{
        contained:{
          textTransform: 'none', 
          fontWeight: 800,
          fontSize: '0.9rem',
          backgroundColor:'#f6c042',
          width: '150px', 
          height: '50px', 
          color:'white',
          '&:hover':{
            backgroundColor:'#283e50',
          },
        },
      },
    },
    // custom app bar
    MuiAppBar:{
      styleOverrides:{
        root: {
          backgroundColor: '#283e50',
          color:'white'
        },
      }
    },
    // custom textfield form
    MuiTextField:{
      defaultProps: {
        fullWidth: true, // Ajout de fullWidth par défaut
      },
      styleOverrides:{
        root:{
          backgroundColor: '#eeeeee',

          '& .MuiInputBase-input':{ // cibler l'input du TextField
            fontFamily: 'Noto sans', 
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '16px',
            color: '#545252',
          },
          '& .MuiInputLabel-root': { 
            fontFamily: 'Noto sans', 
            fontWeight: 100,
            fontSize: '16px',
            lineHeight: '16px',
            color: '#545252',
          },
        }
      }, 
    },
    MuiTab: {
      styleOverrides: {
        root: {
          lineHeight: '24px',
          fontSize: '14px', 
          fontFamily: 'Roboto',
          fontWeight: 600, 
          color: '#66666', 
          '&.Mui-selected': {
            color: '#283e50', 
            BorderColor: '#000000'
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
        },
        indicator: {
          backgroundColor: '#283e50', 
        },
      },
    },
  }, 
});
export default theme;