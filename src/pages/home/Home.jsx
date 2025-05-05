import "./home.css";
import Carousel from "../../components/carousel/Carousel";
import Navbar from '../../components/navbar/Navbar'
import ShopWindow from "../../components/shopwindow/ShopWindow";
import Contact from "../../components/contact/Contact";
import Service from "../../components/service/Service";
import Footer from "../../components/footer/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ShopWindow />
      <Contact />
      <Service />
      <Footer />
    </>
  )
}

export default Home