import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card"
import {BiSearch} from "react-icons/bi"
import "./estoque.css"
import { carInfo } from '../../data/car';
import { useEffect, useState } from 'react';
import Pagination from '../../components/pagination/Pagination';

const LIMIT = 12;

const Estoque = () => {

  const [cards, setCards] = useState(null);
  const [skip, setSkip] = useState(0);
  const [search,setSearch] = useState("");

  useEffect(() => {
    const searchCards = (skip, end) => {
      return carInfo.slice(skip, end)
    }
    setCards(searchCards(skip, skip === 0 ? 1 * LIMIT : skip * LIMIT)); 
  }, [skip])

  const searchCar = (searchedText) => {
    const resultCars = carInfo.filter((text) => (
      text.modelo.includes(searchedText)
    ))
    setCards(resultCars.length > LIMIT ? resultCars.slice(0, LIMIT) : resultCars)
  }

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
                  <input type="text" id="txtSearch" onChange={(e) => setSearch(e.target.value)} />
                  <BiSearch onClick={() => searchCar(search)}/>
                </div>
            </div>

            <div className="est-vitrine">
              {
                cards && cards.map((item, index) => {
                  const car = JSON.parse(JSON.stringify(item))
                  return <Card key={index} item={car} />
                })}
            </div>
        </div>

        <div className="est-vitrine-pagination">

          <Pagination 
          limit={LIMIT} 
          total={carInfo.length} 
          skip={skip} 
          setSkip={setSkip} 
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Estoque