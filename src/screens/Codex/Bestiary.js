import React from 'react'
import "./style.css"
import { PageBanner, SectionTitle } from '../../components/Components'
import { BestiaryList } from '../../utils/lists/BestiaryList'

export default function Bestiary() {

  return (
    <div className="page-container">
        <PageBanner 
            title="Bestiário" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <div className="page-content">
            {BestiaryList.map((item, index) => (
                <div className="page-section" key={index}>
                    <SectionTitle label={item.ordem} />
                    <div className="bestiary-subsection">
                        {item.bestas ? (
                            <ul className="bestiary-grid">
                                {item.bestas.map((besta, idx) => (
                                    <li key={idx}>
                                      <a href="/" className='bestiary-anchor'>
                                      <img src="/assets/image-background.jpg" alt="" />
                                        <span>{besta.nome}</span>
                                      </a>
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        {item.subordem ? (
                            item.subordem.map((sub, subIdx) => (
                                <div key={subIdx} className="bestiary-subsection">
                                    <h2 className="bestiary-subsection-title">{sub.nome}</h2>
                                    <ul className="bestiary-grid">
                                        {sub.bestas.map((besta, bestIdx) => (
                                          <li key={bestIdx}>
                                            <a href="/" className='bestiary-anchor'>
                                              <img src="/assets/image-background.jpg" alt="" />
                                              <span>{besta.nome}</span>
                                            </a>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
  
}
