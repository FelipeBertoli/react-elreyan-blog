import React from "react";
import "./style.css";
import RelationItem from "./RelationItem/index";
import { TaleCard } from "../../components/Components";

export default function Dossier() {
  const talesData = [
    {
      title: "Conto",
      genres: [
        { name: "Gênero 1" },
        { name: "Gênero 2" },
        { name: "Gênero 3" },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam metus, posuere vel fringilla sed, rutrum eu arcu.",
      image: "/assets/image-background.jpg",
    },
    {
      title: "Conto",
      genres: [
        { name: "Gênero 1" },
        { name: "Gênero 2" },
        { name: "Gênero 3" },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam metus, posuere vel fringilla sed, rutrum eu arcu.",
      image: "/assets/image-background.jpg",
    },
  ];

  return (
    <div className="page-container">
      <div className="dossier-top-content">
        <div className="dossier-image-container">
          <img
            src="https://s1.1zoom.me/big0/641/Monsters_Lava_504865.jpg"
            alt=""
          />
        </div>
        <div className="dossier-overlay">
          <div className="dossier-header">
            <h1 className="dossier-title">Avelokanis</h1>
            <b className="dossier-subtitle">O Colosso de Cinzas</b>
          </div>
        </div>

      </div>

      <div className="black-line"></div>

      <div className="dossier-content">
        <h1 className="dossier-content-title">Sobre</h1>
        <div className="dossier-infobox">
          <div className="dossier-table">
            <div className="dossier-table-cell">
              <span>Classe</span>
              <a href="/">Entidade</a>
            </div>
            <div className="dossier-table-cell">
              <span>Denominação</span>
              <a href="/">Aspecto</a>
            </div>
            <div className="dossier-table-cell">
              <span>Região</span>
              <a href="/">Qoa</a>
            </div>
            <div className="dossier-table-cell">
              <span>Período</span>
              <a href="/">Era dos Elementos</a>
            </div>
          </div>
          <div className="dossier-section">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              diam metus, posuere vel fringilla sed, rutrum eu arcu. Sed porta
              nec ex eu vulputate. Aliquam eget aliquet ex. Nunc at sapien
              pellentesque, hendrerit sapien id, cursus leo. Pellentesque a
              sagittis odio. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Nulla facilisi.
              Praesent et pulvinar lorem, eget egestas massa. Aliquam tempor est
              velit, id vestibulum dolor cursus eget. Nullam ac mi odio. Aliquam
              et lobortis ipsum. Praesent iaculis dui mi, fringilla pulvinar sem
              ornare ut. In vitae hendrerit nunc. Sed id dolor molestie lacus
              porta lacinia nec nec enim. Mauris et arcu odio.
            </p>
          </div>
          <div className="dossier-relationship">
            <h3 className="dossier-relationship-title">Relações</h3>
            <div className="dossier-relationship-row">
              <RelationItem label="Singularidades" />
              <RelationItem label="Filhos das Cinzas" />
              <RelationItem label="Mestres da Rocha" />
              <RelationItem label="Dhelgu" />
            </div>
          </div>
        </div>
      </div>

      <div className="dossier-tales-content">
        <h1 className="dossier-content-title">Contos</h1>
        <div className="dossier-tales-container">
          {talesData.map((tale) => {
            return <TaleCard data={tale} />;
          })}
        </div>
      </div>

      <div className="dossier-content">
        <h1 className="dossier-content-title">História</h1>
        <div className="dossier-history-section">
          <div className="dossier-history-header">
            <a
              onClick={() => console.log("")}
              className="dossier-age-icon active"
            >
              Era dos Elementos
            </a>
            <a onClick={() => console.log("")} className="dossier-age-icon">
              Era da Insurgência
            </a>
            <a onClick={() => console.log("")} className="dossier-age-icon">
              Era da Ressurgência
            </a>
          </div>
          <div className="dossier-history-container">
            <div className="dossier-history-divide">
              <h2 className="dossier-history-subtitle">Idade</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum feugiat fermentum mauris. Suspendisse erat ante,
                egestas vel magna ac, lobortis commodo turpis. Cras non
                ultricies mauris, ut ullamcorper turpis. Donec efficitur
                ullamcorper dolor sed interdum. Quisque at felis id massa
                consectetur imperdiet. Suspendisse ultrices suscipit iaculis.
                Etiam dolor ligula, sollicitudin non placerat a, commodo a
                ipsum. Donec rutrum id metus at rutrum. Maecenas a sagittis
                orci. Curabitur molestie, magna eget porttitor vestibulum,
                tortor ipsum fringilla sapien, aliquet ullamcorper magna sapien
                ut augue. Pellentesque imperdiet ornare justo sed gravida.
                Integer eleifend enim non erat elementum luctus. Donec sed
                pretium orci. Vestibulum nisi lorem, gravida a elit vestibulum,
                porta commodo sem. Curabitur quis lacus porta, sollicitudin ex
                nec, molestie massa. Aenean feugiat finibus libero, id accumsan
                ligula auctor in. Duis ornare pretium purus, ut dictum nulla
                rutrum sit amet. Cras nec felis sit amet magna posuere suscipit
                eget in metus. Aliquam bibendum sapien id rutrum ultrices. Nam
                non diam id mauris varius sollicitudin. Etiam in erat augue.
                Maecenas sem sapien, ornare ut tempus a, suscipit ac nibh.
                Suspendisse tincidunt ut nulla a mattis. Nulla nec felis a quam
                consequat rhoncus ac sit amet justo. Nullam blandit nunc nulla,
                vel laoreet magna pharetra ut. Suspendisse egestas vitae mauris
                a pulvinar. Mauris quis urna scelerisque nunc facilisis volutpat
                ac a urna. Quisque bibendum mauris eget consectetur semper.
                Nulla non erat in ante imperdiet ultrices. Fusce egestas
                ultrices elit at faucibus. Vivamus sit amet lacinia neque, quis
                sagittis nisl. Nam sit amet iaculis massa. Suspendisse malesuada
                ipsum vitae ornare congue.
              </p>
            </div>
            <div className="dossier-history-divide">
              <h2>Idade</h2>
              <div className="line"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum feugiat fermentum mauris. Suspendisse erat ante,
                egestas vel magna ac, lobortis commodo turpis. Cras non
                ultricies mauris, ut ullamcorper turpis. Donec efficitur
                ullamcorper dolor sed interdum. Quisque at felis id massa
                consectetur imperdiet. Suspendisse ultrices suscipit iaculis.
                Etiam dolor ligula, sollicitudin non placerat a, commodo a
                ipsum. Donec rutrum id metus at rutrum. Maecenas a sagittis
                orci. Curabitur molestie, magna eget porttitor vestibulum,
                tortor ipsum fringilla sapien, aliquet ullamcorper magna sapien
                ut augue. Pellentesque imperdiet ornare justo sed gravida.
                Integer eleifend enim non erat elementum luctus. Donec sed
                pretium orci. Vestibulum nisi lorem, gravida a elit vestibulum,
                porta commodo sem. Curabitur quis lacus porta, sollicitudin ex
                nec, molestie massa. Aenean feugiat finibus libero, id accumsan
                ligula auctor in. Duis ornare pretium purus, ut dictum nulla
                rutrum sit amet. Cras nec felis sit amet magna posuere suscipit
                eget in metus. Aliquam bibendum sapien id rutrum ultrices. Nam
                non diam id mauris varius sollicitudin. Etiam in erat augue.
                Maecenas sem sapien, ornare ut tempus a, suscipit ac nibh.
                Suspendisse tincidunt ut nulla a mattis. Nulla nec felis a quam
                consequat rhoncus ac sit amet justo. Nullam blandit nunc nulla,
                vel laoreet magna pharetra ut. Suspendisse egestas vitae mauris
                a pulvinar. Mauris quis urna scelerisque nunc facilisis volutpat
                ac a urna. Quisque bibendum mauris eget consectetur semper.
                Nulla non erat in ante imperdiet ultrices. Fusce egestas
                ultrices elit at faucibus. Vivamus sit amet lacinia neque, quis
                sagittis nisl. Nam sit amet iaculis massa. Suspendisse malesuada
                ipsum vitae ornare congue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
