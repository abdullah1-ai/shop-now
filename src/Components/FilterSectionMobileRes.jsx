import { useContext } from "react";
import { dataContext } from "../Context/ApiDataContext";

const FilterSectionMobileRes = ({
  resetFilters,
  searchVal,
  setSearchVal,
  brandVal,
  setBrandVal,
  setCategoryVal,
  setPrice,
  priceRange,
  setPriceRange,
  cateAll,
  brandAll,
  categoryVal,
  price,
  setToggleFilter,
}) => {
  const {  dataApi } = useContext(dataContext);
  /* Add to Cart Context */

  return (
    <>
      {dataApi.length > 0 && (
        <div className="max-w-[95%]  flex gap-7 mx-auto my-8 ">
          {/* filter Products Section */}
          <div className="bg-gray-100 rounded-2xl p-8 h-fit flex flex-col gap-3.5 w-full">
            <input
              type="text"
              placeholder="Search Items"
              className="p-2 border border-gray-200 bg-white rounded-lg"
              value={searchVal}
              onInput={(e) => {
                setSearchVal(e.target.value.trim());
              }}
            />

            <div>
              {cateAll.map((item, index) => {
                return (
                  <div key={index} className=" flex gap-2">
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
              value={brandVal}
              onChange={(e) => {
                setBrandVal(e.target.value);
              }}
            >
              {brandAll.map((item, index) => {
                return (
                  <option key={index} value={item}>
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

            <div className="flex items-center justify-around">
              <button
                className="p-2 text-white bg-red-500 font-medium rounded-lg "
                onClick={() => {
                  resetFilters();
                  setToggleFilter(false);
                }}
              >
                Reset Filter
              </button>

              <button
                className="p-2 text-white bg-red-500 font-medium rounded-lg  "
                onClick={() => {
                  setToggleFilter(false);
                }}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSectionMobileRes;
