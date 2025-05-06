import { useState } from "react";
import "./carouselsmall.css"
import {
    BsCircleFill,
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
    } from "react-icons/bs";

const CarouselSmall = ({ images }) => {
  const [slide, setSlide] = useState(0);
  
  /*const vitrine = [
    {id: 1, url: "./assets/images/vitrine/carro1.jpg"},
    {id: 2, url: "./assets/images/vitrine/carro2.jpg"},
    {id: 3, url: "./assets/images/vitrine/carro3.jpg"},
    {id: 4, url: "./assets/images/vitrine/carro4.jpg"},
    {id: 5, url: "./assets/images/vitrine/carro5.jpg"},
    {id: 6, url: "./assets/images/vitrine/carro6.jpg"},
    {id: 7, url: "./assets/images/vitrine/carro7.jpg"},
    {id: 8, url: "./assets/images/vitrine/carro8.jpg"},
  ];*/

  const navPrev = () => {
      const isFirst = slide === 0;
      const prevSlide = isFirst ? images.length -1 : slide - 1;
      setSlide(prevSlide);
  };

  const navNext = () => { 
      const isLast = slide === images.length - 1;
      const nextSlide = isLast ? 0 : slide + 1;
      setSlide(nextSlide);
  };

  const navDot = (index) => {
    setSlide(index)
  }

  return (
    <div className="crsm-container">
        <div className="crsm-arrows">
            <BsFillArrowLeftCircleFill onClick={navPrev}/>
            <BsFillArrowRightCircleFill onClick={navNext}/>
        </div>

        <div 
          className="crsm-item"
          style={{
            backgroundImage: `url(${images[slide].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
 

        <div className="crsm-dots">
            {
              images.map((image, index) => (
                <BsCircleFill
                key={image.id} 
                onClick={() => navDot(index)}
                />
              ))}
        </div>       
    </div>
  );
};

export default CarouselSmall