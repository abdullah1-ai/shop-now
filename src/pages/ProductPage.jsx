import { ShoppingCart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddToCartContext } from "../Context/AddToCartContext";

const ProductPage = () => {
  const { isAlreadyExists, addToCartRed } = useContext(AddToCartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  function callProduct(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }

  const navigate = useNavigate();
  useEffect(() => {
    callProduct(productId);
  }, [productId]);

  useEffect(() => {
    const cartItem = addToCartRed.find((item) => item.id === Number(productId));
    setQuantity(cartItem ? cartItem.quantity : 1);
  }, [addToCartRed, productId]);

  return (
    product != null && (
      <div className="">
        <div className="max-w-7xl h-screen mx-auto mb-90  container px-2 py-30">
          <h2 className="text-lg">
            <span
              className="text-red-500  cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            /
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/products")}
            >
              Products
            </span>
            /<span>{product.title}</span>
          </h2>
          <div className="flex xl:flex-row flex-col w-full gap-7 items-center justify-evenly ">
            <img
              className="w-[350px] md:w-[550px]"
              src={product?.images[0]}
              alt=""
            />
            <div className="flex flex-col gap-6 mb-3 pr-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                {product.title}
              </h2>
              <h2 className="text-md md:text-lg font-semibold">
                <span>{product.category}</span>/<span>{product.brand}</span>/
                <span>{product.title}</span>
              </h2>

              <div className="flex gap-2 items-center">
                <p className="text-lg md:text-xl text-gray-800 font-semibold">
                  ${product?.price}
                </p>
                <p className="text-lg line-through md:text-xl text-gray-800 ">
                  ${(product?.price * 4) / 100 + product?.price}
                </p>
                <button className=" rounded-full text-white text-md md:text-xl font-medium bg-red-500 p-2">
                  Discount 4%
                </button>
              </div>
              <div>
                <p className="max-w-[400px] md:max-w-[480px] text-lg text-justify">
                  {product?.description}
                </p>
              </div>
              <div className="flex gap-2 items-center ">
                <input
                  type="number"
                  onChange={(e) => {
                    const newQuantity = Number(e.target.value);
                    setQuantity(newQuantity);
                    isAlreadyExists(product, "editQuantity", newQuantity);
                  }}
                  value={quantity}
                  className="p-1 w-[50px] text-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  min={1}
                />{" "}
                <label htmlFor="" className="font-semibold  text-xl">
                  Quantity
                </label>
              </div>
              <button
                className="bg-red-500 text-white w-fit px-2 py-1 text-md md:text-lg font-semibold rounded-lg  flex items-center gap-1"
                onClick={() => {
                  isAlreadyExists(product);
                  const cartItem = addToCartRed.find(
                    (item) => item.id === Number(productId),
                  );
                  setQuantity(cartItem ? cartItem.quantity : 1);
                }}
              >
                <span>
                  {" "}
                  <ShoppingCart />
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
