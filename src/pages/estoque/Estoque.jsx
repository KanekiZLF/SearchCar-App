import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card"
import {BiSearch} from "react-icons/bi"
import "./estoque.css"
import { carInfo } from '../../data/car';

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
              {
                carInfo.slice(0,12).map((item, index) =>(
                  <Card key={index} item={item} />
                ))
              }
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Estoque