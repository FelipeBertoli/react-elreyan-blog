import "./style.css";
import NavbarButton from "./HeaderButton"

export default function Header() {
    return (
        <div className="header-container">
            <img src="/assets/elreyan-logo-gold.png" className='elreyan-logo' alt=""/>
        
            <div className="header-column">
                <div className="navbar-button-group">
                    <NavbarButton label="Início" route="/"/>
                    <NavbarButton label="Memórias" route="/contos"/>
                    <NavbarButton label="Códex" route="/codex"/>
                    <NavbarButton label="Sobre" route="/sobre"/>
                </div>
                <div className="icon-group">
                <a href="/" className="icon"><i class="fi fi-brands-facebook"></i></a>
                    <a href="/" className="icon"><i class="fi fi-brands-instagram"></i></a>
                    {/* <a href="/" className="icon"><i class="fi fi-brands-discord"></i></a> */}
                    <a href="/" className="icon"><i class="fi fi-brands-tik-tok"></i></a>
                    <a href="/" className="icon"><i class="fi fi-brands-twitter-alt"></i></a>
                    <a href="/" className="icon"><i class="fi fi-brands-youtube"></i></a>
                    {/* Wattpad, Scriv<a href="/" className="icon"><i class="fi fi-ss-book-open-cover"></i></a> */}
                    {/* <a href="" className="navbar-icon"><i class="fi fi-ss-envelope"></i></a>
                    <a href="" className="navbar-icon"><i class="fi fi-brands-whatsapp"></i></a>
                     */}
                </div>
            </div>
        </div>
    );

}

