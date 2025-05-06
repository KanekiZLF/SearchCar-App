import "./card.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import CarouselSmall from "../carousel/CarouselSmall";

const Card = ({ item }) => {
    if (!item) return null; // ou um "Loading..." / placeholder
  return (
    <div className="crd-container">
      <div className="crd-top">
        <CarouselSmall images={item.imgCard} />
      </div>

      <div className="crd-bottom">
        <div className="crd-carinfo">
          <h1>{item.marca}</h1>
          <h2>{item.modelo}</h2>
          <span>{item.ano}</span>
        </div>

        <div className="crd-price">
          <h1>R$ {item.preco.toLocaleString('pt-BR')}</h1>
        </div>

        <div className="crd-location">
          <FaMapMarkedAlt />
          <span>{item.cidade}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
