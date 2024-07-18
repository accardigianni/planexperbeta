// pages/index.tsx
import React from 'react';
import Navbar from './component/navbar/Navbar';
import { ReturnButton } from './component/button/ReturnButton';
import { ContinueButton } from './component/button/ContinueButton';

export default function Home() {
  return (
    <>
        <Navbar />
        <br />
        <br />
        <br/>
        <ReturnButton />
        <ContinueButton />
        </>
  );
}
