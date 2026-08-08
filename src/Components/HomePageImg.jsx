import banner from "../assets/banner1.jpg";
import { useNavigate } from "react-router-dom";
const HomePageImg = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto bg-gray-200 rounded-2xl my-17  ">
      <div
        className="relative h-[650px] w-full bg-fixed bg-cover bg-center bg-no-repeat  rounded-2xl"
        style={{ backgroundImage: `url( ${banner})` }}
      >
        <div className="absolute inset-0 bg-black/50  rounded-2xl text-white flex items-center justify-center flex-col gap-3 md:gap-5 text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Next Gen Products at Your Fingertips
          </h3>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Discover the best Products with unbeatable prices and free shipping
            on all orders.
          </h3>
          <button
            className="w-fit px-2 py-1 rounded-md text-white font-semibold tetx-lg md:text-xl  bg-red-500"
            onClick={() => {
              navigate("/products");
            }}
          >
            Shop Now
          </button>
        </div>
        {/* <!-- Your scrollable content goes here --> */}
      </div>
    </div>
  );
};

export default HomePageImg;
