import "./car.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { carInfo } from "../../data/car"
import { useParams } from "react-router"

const Car = () => {

  const { id } = useParams ();

  const selectedCar = () => {
    return carInfo.filter((car) => car.id === parseInt(id));
  }

  const carro = selectedCar();

  return (
    <>
      <Navbar />
      <div>Car</div>
      <Footer />
    </>
  )
}

export default Car