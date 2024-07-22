
import React from 'react';
import Navbar from '../component/navbar/Navbar';
import HeadBand from '../component/headBandProjectCréer/headBand';
import { ReturnButton } from '../component/button/ReturnButton';
import { ContinueButton } from '../component/button/ContinueButton';
import BoardBeneficiaryInfo from '../component/board/BoardTemplate';
import CommercialText from '../component/CommercialText/commercialTextfiel';
import './styleBeneficiaire2.css'

export default function Beneficiaire2() {
    return (
      <div>
      <div className='parent'>
        <div className="navbar">
          <Navbar /> 
        </div>
        <div className="headbandCreateProject">
          <HeadBand/>
        </div>
        <div className="commercialAndButton">
          <div className='commercial'>
           <CommercialText/>  
          </div>
          <div className='button'>
            <ReturnButton />
            <ContinueButton />
          </div>
        </div>
      <div className="cardInfo">
        <BoardBeneficiaryInfo />
      </div>
      </div>
          </div>
    );
  }
