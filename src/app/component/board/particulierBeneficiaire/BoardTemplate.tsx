import React from 'react';
import { Box,} from '@mui/material';
import TabsHeadBand from './tabsHeadBand/tabsHeadBand';

export default function BoardBeneficiaryInfo() {
  return (
    <>
      <Box
        sx={{
          borderRadius: 1,
          height: '505px',
          width: '1200px',
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'column',
          }}>
        <TabsHeadBand />
      </Box>
    </>
  );
}
