import {  useEffect } from "react";
import SimpleSlider from "../components/SliderComponent";
import Category from "../components/Category";
import HomePageImg from "../components/HomePageImg";
import Features from "../Components/Features";

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
      <SimpleSlider />
      <Category />
      <HomePageImg />
      <Features />
    </div>
  );
};

export default Home;
