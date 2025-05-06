import "./shopwindow.css"
import Card from "../card/Card"
import { Link } from "react-router"

const ShopWindow = () => {
  return (
    <div className="spw-container">
      <div className="spw-content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <button>
          <Link to="/estoque"> 
            Visualizar todos os veiculos
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ShopWindow