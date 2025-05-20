import "./shopwindow.css";
import Card from "../card/Card";
import { Link } from "react-router";
import { carInfo } from "../../data/car";
import { useState } from "react";

const ShopWindow = () => {

  const [selectedId, setSelectedId] = useState(null); // 👈 Cria o estado


  const handleCardClick = (id) => {
    console.log("ID do card clicado:", id); // 👈 Veja isso no console do navegador
    setSelectedId(id);
  };

  return (
    <div className="spw-container">
      <div className="spw-content">
        {carInfo.slice(0, 12).map((item) => (
          <Card key={item.id} item={item} onClick={handleCardClick}/>
        ))}

        <button>
          <Link to="/estoque"> 
            Visualizar todos os veículos
          </Link>
        </button>
        {selectedId && <p>Selecionado ID: {selectedId}</p>}
      </div>
    </div>
  );
};

export default ShopWindow;
