import "./navbar.css";
import {FaFacebook, FaInstagram, FaWhatsapp, FaYoutube} from "react-icons/fa"

// Componente da NavBar
const Navbar = () => {
  return (
    <div className="nvb-container">
        <div className="nvb-content">
            <h1>SearchCar</h1>
            <ul>
                <li>Home</li>
                <li>Estoque</li>
                <li>Venda</li>
                <li>Compra</li>
                <li>Contato</li>
            </ul>
            <div className="nvb-contato">
                <FaWhatsapp />
                <span>99 9999-9999</span>
            </div>
            <div className="nvb-socialmedia">
                <FaInstagram />
                <FaYoutube />
                <FaFacebook />
            </div>
        </div>
    </div>
  )
}

export default Navbar