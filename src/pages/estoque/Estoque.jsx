import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer";
import {BiSearch} from "react-icons/bi"
import "./estoque.css"

const Estoque = () => {
  return (
    <>
      <Navbar />
      <div className="est-container">
        <div className="est-content">
            <div className="est-banner">
                <h1>Estoque</h1>
                <h2>
                  Carros selecionados pelo nosso time para garantir uma otima compra do seu usado                  
                </h2>

                <div className="est-search-content">
                  <input type="text" id="txtSearch" />
                  <BiSearch />
                </div>
            </div>

            <div className="est-vitrine">
              
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Estoque