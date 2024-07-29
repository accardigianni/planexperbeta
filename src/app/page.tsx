// pages/index.tsx
import React from 'react';
import Beneficiaire from './pageTest/beneficiaire';
import { Box, Container, Grid, Stack } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        height: '100%', // Prend toute la hauteur de la fenêtre
        overflow: 'hidden', // Masque le défilement
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Beneficiaire />
    </Box>
  );
}
