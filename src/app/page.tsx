// pages/index.tsx
import React from 'react';
import Navbar from './component/navbar/Navbar';
import { ReturnButton } from './component/button/ReturnButton';
import { ContinueButton } from './component/button/ContinueButton';
import { Box } from './component/board/BoardTemplate';

export default function Home() {
  return (
    <>
        {/* <Navbar /> */}
        {/* <ReturnButton />
        <ContinueButton /> */}
        <Box/>
        </>
  );
}
