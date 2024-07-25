'use client';  
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f6c042',
    },
    secondary:{
      main:'#283e50'
    }
  },
  components:{
    // custom button
    MuiButton:{
      styleOverrides:{
        contained:{
          backgroundColor:'#f6c042',
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
            fontWeight: 'bold', 
            fontSize: '15px', 
            lineHeight: '16px', 
            fontFamily: 'Inter, sans-serif', 
            color: '#000000e5', 
          },
          // '& .MuiInputLabel-root': { // cibler le label du TextField ???
          //   fontFamily: 'Roboto, sans-serif', // personnaliser la police du label
          //   fontWeight:'bold',
          //   fontSize: '11px',
          //   lineHeight: '16px',
          //   color: '#000000e5',
          // },
      
        }
      }, 
    }
  }
});

export default theme;