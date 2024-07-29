'use client'
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextFieldCustom from '../textfield/texfield';
import TextFielHeadBand from '../textfieldHeadBand/textfieldHeadBand';
import Map from '../map/map';
import AddressView from '../../addresseTravaux/addressView';



export default function TabsHeadBand() {
  // {/* creer une variable value pour l'affichage des onglets ,
  //       creer un handle pour le clique entre les tab */}
  //        {/* les custom table pannel vont afficher les onglets grace a la value */}
  //        // regarder les element tabs et tab pour faire cette section
  //  fonction CustomeTabPanel est une fonction qui vas return les différentes vu des champs

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  // fonction qui cache les elements si l'index selectionné n'est pas le display
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index,  } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  function valueProps(index: number) {
    return {
      id: `simple-tab-${index}`,
       'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const [value, setValue] = useState(0);
const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);

};


  return (
    <>
    <Grid container 
      sx={{justifyContent: 'flex-end',flexDirection: 'row',gap: 5,p : 1,}}>
      <Box sx={{  borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="etape_creation_projet ">
      <Tab label="PARTICULIER BENEFICIAIRE" {...valueProps(0)} />
      <Tab label="ADRESSE DES TRAVAUX" {...valueProps(1)}  />
      <Tab label="SITUATION FISCALE" {...valueProps(2)}  />
      <Tab label="PROJET" {...valueProps(3)}  />
        </Tabs>
      </Box>
      </Grid>

        <Grid container sx={{ flexDirection: 'row', p: 1, height: '100%', width: '100%' }}>
          <Grid container xs={6} sx={{ flexDirection: 'column' }}>
            <CustomTabPanel value={value} index={0}>
                <TextFielHeadBand/>
                <TextFieldCustom/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid container sx={{display:'flex', flexDirection:'column'}}>
                <AddressView/>
                </Grid>
            </CustomTabPanel>
          </Grid>

          <Grid container xs={6}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%'}}>
            <Map/>
          </Grid>
        </Grid>
        </>
        
);
}  