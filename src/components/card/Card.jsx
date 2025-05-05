import "./card.css"
import { FaMapMarkedAlt } from "react-icons/fa"
import CarouselSmall from '../carousel/CarouselSmall'

const Card = () => {
  return (
    <div className="crd-container">
        <div className="crd-top">
            <CarouselSmall />
        </div>
        
        <div className="crd-bottom">
            <div className="crd-carinfo">
                <h1>BMW</h1>
                <h2>X3 M Sport Turbo</h2>
                <span>2018</span>
            </div>

            <div className="crd-price">
                <h1>R$ 249800</h1>
            </div>

            <div className="crd-location">
                <FaMapMarkedAlt />
                <span>Vila Do Chaves-LN</span>
            </div>
        </div>
    </div>
  )
}

export default Card