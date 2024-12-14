import React, { Component } from 'react'
import "./style.css";

export default class SubNav extends Component {
  render() {
    return (
        <div className="sub-navbar">
            <div className="button-group">
              <a href="">Sobre</a>
              <a href="">Contos</a>
            </div>
            <img src="/assets/elreyan-logo-gold.png" className='elreyan-logo'/>
            <div className="button-group">
              <a href="">O Mundo</a>
              {/*
                - Eras
                - Mapa
                - História
                - Povos
              */}
              <a href="">O Oculto</a>
                {/*
                - Conceitos do Universo
                - Entidades (Dhesain, Singularidades, Nyfahol e Exordiais)
                - Bestiário
              */}
            </div>
        </div>
    )
  }
}

