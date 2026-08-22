import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { AddToCartContext } from "../Context/AddToCartContext";
const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [specificCategory, setSpecificCategory] = useState([]);
  const { isAlreadyExists } = useContext(AddToCartContext);
  const [oneDayAfterToday, setOneDayAfterToday] = useState("");
  const [TwoDayAfterToday, setTwoDayAfterToday] = useState("");
  const [TwoDayAfterMonth, setTwoDayAfterMonth] = useState("");

  function categorySearch(categoryName) {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setSpecificCategory(data.products);
      });
  }
  function twoDaysAfter() {
    const twoDaysAfterDate = new Date();
    const yesterday = new Date();
    twoDaysAfterDate.setDate(twoDaysAfterDate.getDate() + 3);
    yesterday.setDate(yesterday.getDate() + 1);
    const twoDaysAfterDayName = twoDaysAfterDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    setTwoDayAfterToday(twoDaysAfterDayName);
    const yesterdayDayName = yesterday.toLocaleDateString("en-US", {
      weekday: "long",
    });
    setOneDayAfterToday(yesterdayDayName);
    const longMonth = twoDaysAfterDate.toLocaleString("default", {
      month: "long",
    });
    setTwoDayAfterMonth(longMonth);
  }
  useEffect(() => {
    categorySearch(category);
    twoDaysAfter();
  }, [category]);

  return (
    <div className="">
    <div className="max-w-7xl mx-auto px-4 container py-30">
      <div className="flex flex-col gap-10 my-7">
        <button
          className="self-start text-white text-xl bg-black/90 px-2 py-1 rounded-md flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          {" "}
          <MoveLeft /> Back
        </button>
        {specificCategory?.map((item, i) => {
          return (
            <div className="my-1 bg-gray-100 rounded-lg" key={i}>
              <div className="flex flex-col md:flex-row items-center  gap-7 p-4 ">
                <img
                  onClick={() => navigate(`/product-page/product/${item.id}`)}
                  className="w-[200px] bg-cover bg-white shadow-2xl rounded-lg"
                  src={item.images[0]}
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <p
                    className="text-2xl font-semibold hover:text-red-500 cursor-pointer"
                    onClick={() => navigate(`/product-page/product/${item.id}`)}
                  >
                    {item.title}
                  </p>
                  <p className="text-2xl font-bold">
                    {" "}
                    <span className="font-medium text-xl">$</span>
                    {item.price}
                    <span className="font-medium text-xl">(4% OFF)</span>
                  </p>
                  <div>
                    <p className="text-md font-semibold">
                      {item.category.toUpperCase()}
                    </p>
                    <p className="text-md font-semibold">
                      Free Delivery{" "}
                      <span className="font-bold">{TwoDayAfterToday},</span>{" "}
                      <span className="font-bold">{TwoDayAfterMonth}</span>
                    </p>
                    <p className="text-md font-semibold">
                      Or Fastest delivery Tommorrow,{" "}
                      <span>{oneDayAfterToday}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      isAlreadyExists(item);
                    }}
                    className="self-start text-white bg-red-500 px-2 py-1 text-lg rounded-lg font-semibold"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default CategoryPage;
