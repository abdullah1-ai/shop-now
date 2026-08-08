import { useContext, useEffect, useRef, useState } from "react";
import { AddToCartContext } from "../Context/AddToCartContext";
import { BriefcaseBusiness, ClipboardList, Trash2, Van } from "lucide-react";
import { SignUpButton, useUser } from "@clerk/react";
import EmptyCart from "../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const promo = useRef("");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();

  const { isAlreadyExists, addToCartRed, applyPromo, setApplyPromo } =
    useContext(AddToCartContext);

  const [itemsTotal, setItemsTotal] = useState({});
  const [triggerGrandFun, setTriggerGrandFun] = useState(false);

  const { user } = useUser();
  
  function grandTotal(addToCartArr = [], promo = "", applyPromo) {
    let obj = {};
    const sumPrice = addToCartArr?.reduce((acc, item) => {
      return item.price * item.quantity + acc;
    }, 0);

    if (promo == "" && applyPromo == false) {
      obj.items = sumPrice;
      obj.itemsPlusHandlingCharges = sumPrice + 5;
      setItemsTotal(obj);
    } else if (promo == "" && applyPromo == true) {
      obj.items = sumPrice;
      obj.itemsPlusHandlingCharges = sumPrice;
      setItemsTotal(obj);
    } else if (promo == "abdul00") {
      obj.items = sumPrice;
      obj.itemsPlusHandlingCharges = sumPrice;
      setItemsTotal(obj);
      setApplyPromo(true);
      localStorage.setItem("PromoApply", JSON.stringify(true));
    }
  }

  useEffect(() => {
    if (addToCartRed.length == 0) {
      setApplyPromo(false);
      localStorage.setItem("PromoApply", JSON.stringify(false));
    }
    const promoCode = promo.current?.value ?? "";
    grandTotal(addToCartRed, promoCode, applyPromo);
  }, [addToCartRed, triggerGrandFun]);
  
  return user ? (
    <div>
      <div className="w-fit md:w-full md:mx-auto md:max-w-7xl">
        <div className="flex flex-wrap gap-2 md:gap-1 ml-2">
        {addToCartRed.map((item,index) => {
          return (
            <div
              key={index}
              className="bg-gray-100 w-[165px] md:w-full min-w-0 md:min-h-[220px] my-2 overflow-hidden rounded-xl"
            >
              <div className="grid grid-cols-1 gap-3 items-start mx-auto px-3 py-3 md:grid-cols-[1fr_130px_80px] md:gap-4 md:items-center md:px-4 md:pl-0 md:py-0">
                <div className="flex flex-col md:flex-row gap-3 pt-2 min-w-0">
                  <div className="flex-shrink-0 md:px-3 lg:py-2 ">
                    <img
                      className="block h-[120px] w-full object-cover bg-gray-200 border border-gray-300 shadow-2xl rounded-2xl md:h-[200px] md:w-[220px]"
                      src={item.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 w-full flex flex-col gap-3 pt-3">
                    <p className="text-sm md:text-2xl text-gray-700 font-bold break-words">
                      {item.title}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs md:text-xl line-clamp-2 md:line-clamp-1 lg:line-clamp-2 w-full text-gray-700 font-semibold break-words">
                        {item.description}
                      </p>
                      <p className="text-xs md:text-lg text-gray-700 font-semibold">
                        Price: ${item.price}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-between gap-3 md:flex-none md:justify-start">
                  <div className="bg-gradient-to-r w-fit from-red-500 to-purple-600 px-2 py-2 md:p-3 flex flex-row items-center gap-2 md:gap-4 text-white text-base md:text-xl rounded-2xl font-bold">
                    <span
                      onClick={() => {
                        isAlreadyExists(item, "-");
                      }}
                      className="text-lg md:text-2xl cursor-pointer"
                    >
                      -
                    </span>{" "}
                    <input
                    onChange={()=>{}}
                      type="number"
                      className="w-10 md:w-14 backdrop:backdrop-blur-2xl bg-white/20 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      value={item.quantity}
                      id=""
                    />
                    <span
                      onClick={() => {
                        isAlreadyExists(item, "+");
                      }}
                      className="text-lg md:text-2xl cursor-pointer"
                    >
                      +
                    </span>
                  </div>

                  <div
                    onClick={() => {
                      isAlreadyExists(item, "remove");
                    }}
                    className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full text-2xl font-semibold text-red-600 shrink-0 md:pr-4"
                  >
                    <Trash2 />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Rear Section */}
        {addToCartRed?.length > 0 ? (
          <div className="flex flex-col gap-3 md:flex-row md:gap-5 max-w-6xl  ml-2 md:ml-35  xl:mx-auto my-10 ">
            {/*form section  */}

            <div className="h-fit bg-gray-200 rounded-2xl  w-[300px] md:w-[40%] px-10 py-6">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold">Delivery info</h3>
                <div className="flex flex-col ">
                  <label htmlFor="" className="text-gray-800 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full bg-white p-2 rounded-lg shadow-2xl border border-gray-300"
                  />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="" className="text-gray-800 font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    className="w-full bg-white p-2 rounded-lg shadow-2xl border border-gray-300"
                  />
                </div>

                <div className="flex flex-col lg:flex-row gap-2 ">
                  <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-gray-800 font-medium">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className="bg-white p-2 rounded-lg shadow-2xl border border-gray-300 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor=" " className="text-gray-800 font-medium">
                      PostCode
                    </label>
                    <input
                      type="text"
                      placeholder="Enter PostCode"
                      className="w-full bg-white p-2 rounded-lg shadow-2xl border border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-gray-800 font-medium">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Country"
                      className="w-full bg-white p-2 rounded-lg shadow-2xl border border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-gray-800 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone"
                      className="w-full bg-white p-2 rounded-lg shadow-2xl border border-gray-300"
                    />
                  </div>
                </div>
                <button className="text-white bg-red-500 px-2 py-1 text-lg font-medium rounded-md my-4 w-fit">
                  Submit
                </button>

                <div className="self-center flex flex-col gap-3">
                  <p className="text-red-500 text-xl font-semibold ">
                    --------***--------
                  </p>

                  <button className="text-white rounded-md text-lg font-semibold  bg-red-500 px-2 py-1">
                    Detect Location
                  </button>
                </div>
              </div>
            </div>

            {/* Bill Details section */}
            <div className="  w-[300px] lg:w-[40%] bg-gray-100 h-fit p-8 rounded-2xl">
              <h2 className="text-xl font-semibold mb-3">Bill Details</h2>
              <div className=" flex flex-col gap-3">
                <div className="flex justify-between ">
                  <p className="flex items-center gap-1 text-md">
                    <span className="">
                      <ClipboardList size={"1.2rem"} />
                    </span>
                    Items total
                  </p>
                  <p>${itemsTotal.items}</p>
                </div>
                <div className="flex justify-between ">
                  <p className="flex items-center gap-1 text-md">
                    <span className="">
                      <Van size={"1.2rem"} />
                    </span>
                    Delivery Charges
                  </p>
                  <p className="font-semibold text-red-500 flex gap-1">
                    <span className="line-through text-black font-normal">
                      ${"25"}
                    </span>
                    Free
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="flex items-center gap-1 text-md">
                    <span className="">
                      <BriefcaseBusiness size={"1.2rem"} />
                    </span>
                    Handling Charges
                  </p>
                  <p
                    className={`font-semibold text-red-500 ${applyPromo != false && "line-through"}`}
                  >
                    ${"5"}
                  </p>
                </div>
              </div>
              <hr className="text-gray-300 my-3" />

              <div className="flex flex-col gap-5">
                <div className="flex justify-between text-lg font-semibold">
                  <p>Grand Total</p>
                  <p>${itemsTotal.itemsPlusHandlingCharges}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="text-md font-semibold">Apply Promo</h1>
                  <div className="flex justify-between gap-4 items-center">
                    <input
                      ref={promo}
                      type="text"
                      placeholder="Enter Code"
                      className="w-full bg-white p-2 border border-gray-300 rounded-lg "
                    />
                    <button
                      onClick={() => {
                        setTriggerGrandFun((prev) => !prev);
                      }}
                      className="text-white bg-red-500 px-2 py-1 rounded-lg font-semibold"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <button className="text-white bg-red-500 px-2 py-1 rounded-lg font-semibold w-full text-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5 md:gap-0 mt-2 items-center mb-4">
            <div className="self-start text-xl font-semibold">
              My Cart Items ({addToCartRed?.length})
            </div>
            <p className="text-2xl font-semibold text-red-600">
              Oh No! No Items Added in Cart
            </p>
            <img className="h-[380px] md:h-[500px]" src={EmptyCart} alt="" />
            <button
              onClick={() => navigate("/products")}
              className="text-xl text-white px-2 py-1 bg-red-500 rounded-lg font-medium"
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="h-screen fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center bg-gray-300  p-10 flex flex-col gap-7 rounded-2xl">
        <p className="text-gray-800 text-lg">Please Resister YourSelf</p>
        <SignUpButton className="text-white bg-red-500 rounded-lg px-2 py-1" />
      </div>
    </div>
  );
};

export default Cart;
