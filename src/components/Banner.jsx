import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";
import img3 from "../assets/home/03.png";
import img4 from "../assets/home/04.jpg";
import img5 from "../assets/home/05.png";
import img6 from "../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={2000}
      stopOnHover={false}
    >
      <div className="h-[90vh]">
        <img className="h-full" src={img1} />
      </div>
      <div className="h-[90vh]">
        <img className="h-full" src={img2} />
      </div>
      <div className="h-[90vh]">
        <img className="h-full" src={img3} />
      </div>
      <div className="h-[90vh]">
        <img className="h-full" src={img4} />
      </div>
      <div className="h-[90vh]">
        <img className="h-full" src={img5} />
      </div>
      <div className="h-[90vh]">
        <img className="h-full" src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
