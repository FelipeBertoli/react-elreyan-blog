import React from 'react';
import "./style.css";
import { Card, Carousel, PageBanner, SectionTitle } from '../../components/Components';

export default function Home() {
  return (
    <div className='page-container'>
        <PageBanner title="Bem-vindo à Elreyan" icon="/assets/elreyan-logo.png" isRotate={true}
          description="Elreyan é um mundo moldado pela ascenção e a queda de lendas, onde deuses e mortais enfrentam as consequências de suas próprias ações. 
          Um lugar onde a violência, o terror, os pecados e as guerras parecem incessantes, 
          mas onde o amor, a honra e a esperança ainda conseguem florescer. Aqui, a escuridão e a luz caminham juntas, tecendo um universo onde
          os maiores horrores coexistem com os mais sublimes gestos de bondade e coragem."/>

      <div className="page-content">
          <div className='page-section'>
            <SectionTitle label="Navegue por Elreyan"/>
            <div className="page-grid">
              <Card label="Leia os Contos" link="/contos" source="/assets/icons/book-icon.png" description="As lendas que moldaram Elreyan e os mistérios que o cercam apresentados em forma de conto."/>  
              <Card label="Mergulhe na História" source="/assets/icons/history-icon.png" description="A linha do tempo das eras e uma imersão em seus marcos históricos."/>  
              <Card label="Desbrave as Terras" source="/assets/icons/map-icon.png" description="Uma visão detalhada das regiões e continentes que formam o mundo."/>  
              <Card label="Conheça os Povos" source="/assets/icons/folk-icon.png" description="As culturas singulares, aparências exóticas e a história das Antigas e Novas Raças."/>  
              <Card label="Enfrente as Feras" link="/codex/bestiario" source="/assets/icons/bestiary-icon.png" description="Um bestiário que reúne as feras lendárias, monstros e entidades ancestrais de Elreyan."/>  
              <Card label="Domine o Oculto" link="/codex" source="/assets/icons/eclipse-icon.png"  description="Os mistérios ocultos de Elreyan, assim como as forças místicas e as divindades que moldaram o universo." />  
            </div>
          </div>
      </div>

      <div className='border'></div>

      <div className="page-content">

            <Carousel/>
          <div className='page-section'>
            <SectionTitle label="Últimas Novidades"/>
          </div>
      </div>

    </div>
  )
}
