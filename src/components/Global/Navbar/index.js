import "./style.css";
import NavbarButton from "./NavbarButton/index"

export default function Navbar({}) {
    return (
        <div className="navbar">
            <h1 className="title">MUNDOS de PENUMBRA</h1>  
            <div className="navbar-button-group">
                <NavbarButton label="Início" route="/"/>
                <NavbarButton label="Novidades" route="#"/>
                <NavbarButton label="Mundos" route="#"/>
                <div className="icon-group">
                    <a href="" className="icon"><i class="fi fi-brands-instagram"></i></a>
                    <a href="" className="icon"><i class="fi fi-brands-discord"></i></a>
                    {/*Wattpad, Scriv*/}<a href="" className="icon"><i class="fi fi-ss-book-open-cover"></i></a>
                    {/* <a href="" className="navbar-icon"><i class="fi fi-ss-envelope"></i></a>
                    <a href="" className="navbar-icon"><i class="fi fi-brands-whatsapp"></i></a>
                     */}
                </div>
            </div>
        </div>
    );

}

