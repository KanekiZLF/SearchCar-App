import "./shopwindow.css";
import Card from "../card/Card";
import { Link } from "react-router";
import { carInfo } from "../../data/car"; // caminho correto para o seu vitrine.js

const ShopWindow = () => {
  return (
    <div className="spw-container">
      <div className="spw-content">
        {carInfo.slice(0, 12).map((item) => (
          <Card key={item.id} item={item} />
        ))}

        <button>
          <Link to="/estoque"> 
            Visualizar todos os veículos
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ShopWindow;
