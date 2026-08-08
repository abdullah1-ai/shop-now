import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataContext } from "../Context/ApiDataContext";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const navigate = useNavigate();
  return (
    <div>
      <ArrowRight
        className={`arrows ${className}  rounded-full `}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "50px",
          color: "white",
          zIndex: "5",
          width: 30,
          height: 30,
        }}
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <ArrowLeft
        className={`${className} rounded-full`}
        style={{
          ...style,
          zIndex: "5",
          display: "block",
          color: "white",
          position: "absolute",
          left: "50px",
          width: 30,
          height: 30,
        }}
        onClick={onClick}
      />
    </div>
  );
}

export default function SimpleSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 700,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { dataApi } = useContext(dataContext);
  const navigate = useNavigate();

  const SliderCom = Slider.default;
  return (
    <div className="slider-container ">
      <SliderCom {...settings}>
        {dataApi.slice(0, 7).map((item) => {
          return (
            <div
              key={item}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-[520px] md:min-h-[640px] w-full mb-0 flex items-center py-10 md:py-20"
            >
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-7xl md:mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col gap-3 text-white">
                  <p className="text-sm text-red-500 font-semibold">
                    Groom your Personality with our Best products
                  </p>
                  <h3 className="text-xl md:text-3xl font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                  <h3 className="line-clamp-2 text-md md:text-xl">
                    {item.description}
                  </h3>
                  <button className="w-fit px-2 py-1 rounded-md text-white font-semibold   bg-red-500"
                         onClick={() => navigate(`/product-page/product/${item.id}`)}>
                    Shop Now
                  </button>
                </div>

                <img
                  className="bg-gradient-to-r from-[#6441A5] to-[#2a0845] rounded-full shadow-2xl object-contain w-[250px] h-[340px] md:w-[450px] md:h-[540px] shadow-2xl shadow-red-400 shrink-0 hover:scale-105 ease-in-out duration-300"
                  src={item.images[0]}
                  alt=""
                  onClick={() => navigate(`/product-page/product/${item.id}`)}
                />
                {/* </div> */}
              </div>
            </div>
          );
        })}
      </SliderCom>
    </div>
  );
}
