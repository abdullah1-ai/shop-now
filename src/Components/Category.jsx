import { useContext } from "react";
import { dataContext } from "../Context/ApiDataContext";
import {  useNavigate } from "react-router-dom";

const Category = () => {
  const { categoryData } = useContext(dataContext);
const navigate = useNavigate()
  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] ">
      <div className="md:flex grid grid-cols-2 gap-5  md:justify-around mt-0 h-full  py-4 pl-[20px] md:px-[84px] w-full">
        {categoryData.map((item) => {
          return (
            <button onClick={()=> navigate(`category-page/category/${item}`)} key={item} className="text-md md:text-xl text-white px-2 py-1 bg-gradient-to-r from-[red] to-[#b40cb4] rounded-lg font-semibold w-fit">
              {item.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
