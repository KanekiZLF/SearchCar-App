import "./footer.css"
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="ftr-container">
        <div className="ftr-content">
            <div className="ftr-item">
                <ul>
                    <li>Home</li>
                    <li>Estoque</li>
                    <li>Compra</li>
                    <li>Venda</li>
                    <li>Contato</li>
                </ul>
            </div>

            <div className="ftr-item">
                <span>CNPJ 40.002.892/2000-00</span>
                <span>All rights reserved 2025</span>
                <span>Vila do Chaves, LN/Brasil</span>
            </div>

            <div className="ftr-item">
                <FaInstagram />
                <FaYoutube />
                <FaFacebook />
            </div>
        </div>
    </div>
  )
}

export default Footer