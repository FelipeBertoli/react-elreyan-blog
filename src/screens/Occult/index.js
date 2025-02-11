import React from "react";
import "./style.css";
import { Card, PageBanner, SectionTitle} from "../../components/Components";

export default function Occult() {
  return (
    <div className="page-container">
      <PageBanner title="O Oculto" icon="/assets/logos/eclipse-logo.png" isRotate={true}
              description="O compêndio que revela os segredos do Oculto: o intricado sistema de forças invisíveis que rege o universo.  
              Explore desde o papel das menores feras na arquitetura cósmica até os conceitos e entidades que sustentam a própria realidade."/>
      <div className="page-content">
        <div className="page-section">
          <SectionTitle label="O Oculto"/>
          <div className="page-grid">
            <Card label="O Eclipse" link="/codex" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Vartut" link="/codex" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Rën" link="/codex" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Omsu, o Despertar" link="/codex" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Dhesaryt, o Domínio" link="/codex" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Dhesain, os Despertos" link="/codex" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
          </div>
        </div>
        <div className="page-section">
          <SectionTitle label="Entidades"/>
          <div className="page-grid">
            <Card label="Ankayat" link="/codex" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Aspectos" link="/dossier" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Deuses" link="/dossier" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Exordiais" link="/dossier" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Nyfahol" link="/dossier" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Singularidades" link="/dossier" source="/assets/icons/eclipse-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
          </div>
        </div>
      </div>
    </div>
  );
}
