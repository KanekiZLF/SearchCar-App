import "./home.css";
import Carousel from "../../components/carousel/Carousel";
import Navbar from '../../components/navbar/Navbar'
import ShopWindow from "../../components/shopwindow/ShopWindow";
import Contact from "../../components/contact/Contact";


const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ShopWindow />
      <Contact />
    </>
  )
}

export default Home