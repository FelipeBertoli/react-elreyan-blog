import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='footer-top'>
          <div className="footer-column">
              <span className="footer-title">Explorar</span>
              <ul>
                <li><a href="/" className="footer-link">Página Inicial</a></li>
                <li><a href="" className="footer-link">Novidades</a></li>
                <li><a className="footer-link" href="/contos">Contos</a></li>
                <li><a className="footer-link" href="/world">O Mundo</a></li>
                <li><a className="footer-link" href="/">História</a></li>
                <li><a className="footer-link" href="/">Geografia</a></li>
                <li><a className="footer-link" href="/">Povos</a></li>
                <li><a className="footer-link" href="/codex/bestiario">Bestiário</a></li>
                <li><a className="footer-link" href="/">Entidades</a></li>
                <li><a className="footer-link" href="/codex">O Oculto</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <span className="footer-title">Links Úteis</span>
              <ul>
                <li><a href="/" className="footer-link">Facebook</a></li>
                <li><a href="/" className="footer-link">Instagram</a></li>
                <li><a href="/" className="footer-link">TikTok</a></li> 
                <li><a href="/" className="footer-link">Twitter</a></li>
                <li><a href="/" className="footer-link">YouTube</a></li> 
                <li><a href="/" className="footer-link">Wattpad</a></li>
                <li><a href="/" className="footer-link">Scriv</a></li>
              </ul>
            </div>

            <div className="footer-column">

            </div>
        </div>
        <div className='footer-bottom'>
            <span>© 2024 Elreyan Todos os direitos reservados.</span>
            <small>Universo e blog desenvolvidos por Felipe Bertoli Oliveira</small>
            <div className='icon-group'>
              <a href="" className='icon'><i class="fi fi-ss-envelope"></i></a>
              <a href="" className='icon'><i class="fi fi-brands-whatsapp"></i></a>
              <a href="" className='icon'><i class="fi fi-brands-github"></i></a>
            </div>
        </div>
      </div>
    )
  }
}
