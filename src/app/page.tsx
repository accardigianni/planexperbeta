// pages/index.tsx
import React from 'react';
import Beneficiaire from './Formulaire/formulaire';
import './style/global.css'

export default function Home() {
  return (
    <>
    <div style={{ height: '100%' }}>
      <Beneficiaire />
      </div>
    </>
  );
}
