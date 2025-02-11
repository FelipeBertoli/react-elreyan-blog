import React from "react";
import "./style.css";
import { Card, PageBanner, SectionTitle} from "../../components/Components";

export default function Codex() {
  return (
    <div className="page-container">
      <PageBanner title="O Códex do Oculto" icon="/assets/logos/eclipse-logo.png" isRotate={true}
              description="O Códex é um compêndio que revela os segredos do Oculto: o intricado sistema de forças invisíveis que rege o universo.  
              Explore desde o papel das menores feras na arquitetura cósmica até os conceitos e entidades que sustentam a própria realidade."/>
      <div className="page-content">
      <div className="page-section">
          <SectionTitle label="Os Povos" />
          <div className="page-subsection">
            <h2>Raças Antigas</h2>
            <div className="page-grid">
              <Card
                label="Dhelgu"
                link="/dossier"
                source="/assets/icons/folk-icon.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
              <Card
                label="Haldërysh"
                link="/dossier"
                source="/assets/icons/folk-icon.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
              <Card
                label="Povo Herbívoro"
                link="/dossier"
                source="/assets/icons/folk-icon.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
              <Card
                label="Povo Inseto"
                link="/dossier"
                source="/assets/icons/folk-icon.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
              <Card
                label="Povo Peixe"
                link="/dossier"
                source="/assets/icons/folk-icon.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              />
            </div>
          </div>
          <div className="page-subsection">
            <h2>Raças Jovens</h2>
            <div className="page-grid">
            <Card
              label="Auvérios"
              link="/dossier"
              source="/assets/icons/folk-icon.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <Card
              label="Duopavna"
              link="/dossier"
              source="/assets/icons/folk-icon.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <Card
              label="Homens"
              link="/dossier"
              source="/assets/icons/folk-icon.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <Card
              label="Tai Myn"
              link="/dossier"
              source="/assets/icons/folk-icon.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <Card
              label="Vand'ai"
              link="/dossier"
              source="/assets/icons/folk-icon.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
            <Card
              label="Lynn'jau"
              link="/dossier"
              source="/assets/icons/folk-icon.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            />
          </div>
          </div>
        </div>
        <div className="page-section">
          <SectionTitle label="Bestiário" route="codex/bestiario"/>
          <div className="page-grid">
            <Card label="Amaldiçoados" link="/dossier" source="/assets/icons/bestiary-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Carniceiros" link="/dossier" source="/assets/icons/bestiary-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Feras" link="/dossier" source="/assets/icons/bestiary-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <Card label="Vhatoorin" link="/dossier" source="/assets/icons/bestiary-icon.png"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
          </div>
        </div>

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
