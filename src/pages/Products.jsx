import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/ApiDataContext";
import Lottie from "lottie-react";
import animationData1 from "../Animations/emptyBox.json";
import Pagination from "../Components/Pagination";
import loading from "../assets/Loading4.webm";
import { AddToCartContext } from "../Context/AddToCartContext";
import { Funnel } from "lucide-react";
import FilterSectionMobileRes from "../Components/FilterSectionMobileRes";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const LottieCom = Lottie.default;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  const { categoryData, brandData, dataApi, filterData, setFilterData } =
    useContext(dataContext);
  const [priceRange, setPriceRange] = useState(2500);
  /* Add to Cart Context */
  const { isAlreadyExists } = useContext(AddToCartContext);

  let cateAll = ["all", ...categoryData];

  let brandAll = ["All", ...brandData];

  /* states for filter section */
  const [searchVal, setSearchVal] = useState("");

  const [brandVal, setBrandVal] = useState("All");

  const [categoryVal, setCategoryVal] = useState("all");

  const [page, setPage] = useState(1);

  const [price, setPrice] = useState([0, 2500]);

  /* States for Pagination */
  const [dynamicPageNumber, setDynamicPageNumber] = useState(1);

  const [isActivePage, setIsActivePage] = useState(1);

  /* Toogle for mobile responsive  */

  const [toggleFilter, setToggleFilter] = useState(false);

  /* Filter Appy Function */
  function filter(search, categoryVal, brandVal, price) {
    if (
      search !== "" &&
      categoryVal === "all" &&
      brandVal === "All" &&
      price[0] === 0 &&
      price[1] === 2500
    ) {
      let data = dataApi.filter((item) => {
        return item.title.toLowerCase().includes(search);
      });
      setFilterData(data);
    } else if (
      search === "" &&
      categoryVal === "all" &&
      brandVal === "All" &&
      price[0] === 0 &&
      price[1] === 2500
    ) {
      setFilterData(dataApi);
    } else if (
      categoryVal !== "all" &&
      search === "" &&
      brandVal === "All" &&
      price[0] === 0 &&
      price[1] === 2500
    ) {
      let data = dataApi.filter((item) => {
        return item.category === categoryVal;
      });
      setFilterData(data);
    } else if (
      categoryVal !== "all" &&
      search !== "" &&
      brandVal === "All" &&
      price[0] === 0 &&
      price[1] === 2500
    ) {
      let data = dataApi.filter((item) => {
        return (
          item.category === categoryVal &&
          item.title.toLowerCase().includes(search)
        );
      });
      setFilterData(data);
    } else if (
      categoryVal !== "all" &&
      search !== "" &&
      brandVal !== "All" &&
      price[0] === 0 &&
      price[1] === 2500
    ) {
      let data = dataApi.filter((item) => {
        return (
          item.title.toLowerCase().includes(search) &&
          item.category === categoryVal &&
          item.title.toLowerCase().includes(search) &&
          item.brand === brandVal
        );
      });
      setFilterData(data);
    } else if (
      categoryVal !== "all" &&
      search === "" &&
      brandVal !== "All" &&
      price[0] === 0 &&
      price[1] === 2500
    ) {
      let data = dataApi.filter((item) => {
        return (
          item.category === categoryVal &&
          item.title.toLowerCase().includes(search) &&
          item.brand === brandVal
        );
      });
      setFilterData(data);
    } else if (
      categoryVal === "all" &&
      search === "" &&
      brandVal !== "All" &&
      price[0] === 0 &&
      price[1] === 2500
    ) {
      let data = dataApi.filter((item) => {
        return item.brand === brandVal;
      });
      setFilterData(data);
    }

    //reange filter
    else if (
      categoryVal === "all" &&
      search === "" &&
      brandVal === "All" &&
      price[0] == 0 &&
      price[1] <= 2500
    ) {
      let data = dataApi.filter((item) => {
        return item.price >= price[0] && item.price <= price[1];
      });
      setFilterData(data);
    } else if (
      categoryVal !== "all" &&
      search === "" &&
      brandVal === "All" &&
      price[0] == 0 &&
      price[1] <= 2500
    ) {
      let data = dataApi.filter((item) => {
        return (
          item.price >= price[0] &&
          item.price <= price[1] &&
          item.category === categoryVal
        );
      });
      setFilterData(data);
    } else if (
      categoryVal !== "all" &&
      search !== "" &&
      brandVal === "All" &&
      price[0] == 0 &&
      price[1] <= 2500
    ) {
      let data = dataApi.filter((item) => {
        return (
          item.price >= price[0] &&
          item.price <= price[1] &&
          item.category === categoryVal &&
          item.title.toLowerCase().includes(search)
        );
      });
      setFilterData(data);
    } else if (
      categoryVal !== "all" &&
      search !== "" &&
      brandVal !== "All" &&
      price[0] == 0 &&
      price[1] <= 2500
    ) {
      let data = dataApi.filter((item) => {
        return (
          item.price >= price[0] &&
          item.price <= price[1] &&
          item.category === categoryVal &&
          item.title.toLowerCase().includes(search) &&
          item.brand === brandVal
        );
      });
      setFilterData(data);
    } else if (
      categoryVal !== "all" &&
      search === "" &&
      brandVal !== "All" &&
      price[0] == 0 &&
      price[1] <= 2500
    ) {
      let data = dataApi.filter((item) => {
        return (
          item.price >= price[0] &&
          item.price <= price[1] &&
          item.category === categoryVal &&
          item.brand === brandVal
        );
      });
      setFilterData(data);
    } else if (
      categoryVal === "all" &&
      search !== "" &&
      brandVal === "All" &&
      price[0] == 0 &&
      price[1] <= 2500
    ) {
      let data = dataApi.filter((item) => {
        return (
          item.price >= price[0] &&
          item.price <= price[1] &&
          item.title.toLowerCase().includes(search)
        );
      });
      setFilterData(data);
    }
  }
  /* At to cart Logic */

  useEffect(() => {
    filter(searchVal, categoryVal, brandVal, price);
  }, [dataApi, searchVal, categoryVal, brandVal, price, dynamicPageNumber]);

  function resetFilters() {
    setBrandVal("All");
    setCategoryVal("all");
    setSearchVal("");
    setPrice([0, 2500]);
    setPriceRange(2500);
  }

  return (
    <>
      {dataApi.length > 0 ? (
        <div className="max-w-7xl my-10 mx-auto">
          {/*  Mobile Responsive bar */}
          <div className=" md:hidden max-w-[95%] rounded-xl bg-gray-100 mx-auto my-6 p-3">
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-gray-800 ">Apply Filter</p>

              <Funnel
                onClick={() => {
                  setToggleFilter((prev) => !prev);
                }}
              />
            </div>
          </div>

          {/*  Show Filter on toggle */}
          {toggleFilter && (
            <FilterSectionMobileRes
              resetFilters={resetFilters}
              setSearchVal={setSearchVal}
              searchVal={searchVal}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              brandVal={brandVal}
              setBrandVal={setBrandVal}
              setCategoryVal={setCategoryVal}
              setFilterData={setFilterData}
              setPage={setPage}
              setPrice={setPrice}
              cateAll={cateAll}
              brandAll={brandAll}
              categoryVal={categoryVal}
              price={price}
              setToggleFilter={setToggleFilter}
            />
          )}

          <div className="max-w-7xl flex gap-2 ml-[20px] md:ml-[10%] my-7">
            {/* filter Products Section */}
            <div
              className={
                "bg-gray-100 rounded-2xl p-8 h-fit hidden md:flex flex-col gap-3.5 "
              }
            >
              <input
                type="text"
                placeholder="Search Items"
                className="p-2 border border-gray-200 bg-white rounded-lg"
                onInput={(e) => {
                  setSearchVal(e.target.value.trim());
                }}
              />

              <div>
                {cateAll.map((item) => {
                  return (
                    <div key={item} className=" flex gap-2">
                      <input
                        type="checkbox"
                        value={item}
                        checked={categoryVal === item}
                        onChange={() => {
                          setCategoryVal(item);
                        }}
                      />
                      <button>{item.toUpperCase()}</button>
                    </div>
                  );
                })}
              </div>

              <select
                className="bg-gray-100 rounded-sm p-2 bg-white"
                name=""
                id=""
                onChange={(e) => {
                  setBrandVal(e.target.value);
                }}
              >
                {brandAll.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>

              <div className="flex flex-col gap-2">
                <label className="ml-3 self-center " htmlFor="">
                  $0 -- ${priceRange}{" "}
                </label>
                <input
                  type="range"
                  min={0}
                  max={2500}
                  name=""
                  id=""
                  value={price[1]}
                  className="text-red-600"
                  onChange={(e) => {
                    setPriceRange(e.target.value);
                    setPrice([0, Number(e.target.value)]);
                  }}
                />
              </div>

              <button
                className="p-2 text-white bg-red-500 font-medium rounded-lg w-full "
                onClick={() => {
                  resetFilters();
                }}
              >
                Reset Filter
              </button>
            </div>

            {/* products + pagination section */}
            <div
              className={`${toggleFilter ? "blur-sm pointer-events-none select-none" : ""}`}
            >
              {filterData.length > 0 ? (
                <div
                  className={`flex flex-wrap gap-2 md:gap-6 m-0  lg:ml-[10%] `}
                >
                  {filterData
                    .slice(4 * dynamicPageNumber - 4, 4 * dynamicPageNumber)
                    .map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="bg-white rounded-xl min-h-[370px] w-[165px] border border-gray-200 overflow-hidden flex flex-col justify-between pb-3"
                        >
                          <img
                            onClick={() =>
                              navigate(`/product-page/product/${item.id}`)
                            }
                            src={item.images[0]}
                            className="bg-gray-100/50"
                            alt=""
                          />
                          <p className="px-1 text-lg font-medium text-gray-800">
                            {item.title}
                          </p>
                          <p className="px-1 text-md font-medium text-gray-800">
                            {item.category}
                          </p>
                          <p className="px-1 text-md font-medium text-gray-800">
                            ${item.price}
                          </p>
                          <button
                            className="w-full px-2 py-1 rounded-md text-white font-semibold bg-red-500"
                            onClick={() => {
                              isAlreadyExists(item);
                            }}
                          >
                            Add To Cart
                          </button>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className={`" mx-auto "}`} style={{ width: 630 }}>
                  <LottieCom
                    animationData={animationData1}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              )}

              <div className="my-5">
                <Pagination
                  dynamicPageNumber={dynamicPageNumber}
                  setDynamicPageNumber={setDynamicPageNumber}
                  setIsActivePage={setIsActivePage}
                  filterData={filterData}
                  isActivePage={isActivePage}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto h-full hidden md:flex justify-center items-center my-54">
          <video src={loading}></video>
        </div>
      )}
    </>
  );
};

export default Products;
