import { useEffect } from "react";
import SimpleSlider from "../Components/SliderComponent";
import Category from "../Components/Category";
import HomePageImg from "../Components/HomePageImg";
import Features from "../Components/Features";
// Updates Name to Capital Case
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="mt-20">

      <SimpleSlider />
      <Category />
      <HomePageImg />
      <Features />
    </div>
      </div>
  );
};

export default Home;
