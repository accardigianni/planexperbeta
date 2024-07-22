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
    MuiAppBar:{
      styleOverrides:{
        root: {
          backgroundColor: '#283e50',
          color:'white'
        },
      }
    }
  },
    
  
});

export default theme;