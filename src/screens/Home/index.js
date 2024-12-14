import React from 'react';
import "./style.css";
import WorldsWheel from './WorldsWheel/index'
import { SectionTitle } from '../../components/Components';

export default function Home() {
  return (
    <div className='main-page-container'>
      <div className="main-page-banner">
        <h1>Bem-vindo aos mundos de Penumbra.</h1>
        <WorldsWheel/>
      </div>
      <div className="main-page-content">
          <div className='main-page-section'>
            <SectionTitle label="Últimas Novidades"/>
          </div>
          <div className='main-page-section'>
              <SectionTitle label="Elreyan"/>
          </div>
      </div>

    </div>
  )
}
