import React from "react";
import "./style.css";
import {
  PageBanner,
  SectionTitle,
  TaleCard,
} from "../../components/Components";

export default function Tales() {
  const talesData = [
    {
      title: "A Besta e o Caçador",
      genres: [{ name: "Sombrios" }, { name: "Suspense" }, { name: "Terror" }],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam metus, posuere vel fringilla sed, rutrum eu arcu.",
      image: "/assets/tales-images/besta_e_caçador.jpg",
    },
    {
      title: "A Tormenta",
      genres: [{ name: "Ação" }, { name: "Drama" }, { name: "Fantasia" }],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam metus, posuere vel fringilla sed, rutrum eu arcu.",
      image: "/assets/tales-images/tormenta.jpg",
    },
    {
      title: "Entre o Silêncio e a Loucura",
      genres: [
        { name: "Mistério" },
        { name: "Sobrenatural" },
        { name: "Terror" },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam metus, posuere vel fringilla sed, rutrum eu arcu.",
      image: "/assets/tales-images/silencio_e_loucura.jpg",
    },
  ];
  return (
    <div className="page-container">
      <PageBanner
        title="Contos"
        icon="/assets/logos/tales-logo.png"
        description="Descubra o que os livros de história não revelam: a origem esquecida de lendas, segredos sombrios e a perspectiva de figuras que moldaram o destino de Elreyan."
      />
      <div className="page-content">
        <div className="page-section">
          <SectionTitle label="Leia" />
          <div className="page-subsection">
            <h2>A Era dos Elementos</h2>
            <div className="tales-page-content">
              {talesData.map((tale) => {
                return <TaleCard data={tale} />;
              })}
                            {talesData.map((tale) => {
                return <TaleCard data={tale} />;
              })}
            </div>
          </div>
          <div className="page-subsection">
            <h2>A Era da Ascensão</h2>
            <div className="tales-page-content">
              {talesData.map((tale) => {
                return <TaleCard data={tale} />;
              })}
            </div>
          </div>
          <div className="page-subsection">
            <h2>A Era da Colheita</h2>
            <div className="tales-page-content">
              {talesData.map((tale) => {
                return <TaleCard data={tale} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
