import Carousel from 'react-bootstrap/Carousel';
import mountain1 from "../../assets/mountain.jpg";
import mountain2 from "../../assets/mountain3.jpg";
import mountain3 from "../../assets/mountain4.jpg";
import mountain4 from "../../assets/mountain5.jpg";
import "../../styles/carousel.css";

function CarouselCompo() {
  return (
    <Carousel data-bs-theme="dark" className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={mountain1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={mountain2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={mountain3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={mountain4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCompo;