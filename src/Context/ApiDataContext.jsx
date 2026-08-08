import { useEffect, useState } from "react";
import { createContext } from "react";

export const dataContext = createContext();

function filterCatBrand(data, type) {
  let getData = data.map((item) => {
    return item[type];
  });


  let uniqueData = [...new Set(getData)];
  return uniqueData;
}
export const ApiDataContextProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState([]);

  const [categoryData, setCategoryData] = useState([]);

  const [brandData, setBrandData] = useState([]);

    const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setDataApi(data.products);
      });
  }, []);

  useEffect(() => {
    setCategoryData(filterCatBrand(dataApi, "category"));
    setBrandData(filterCatBrand(dataApi, "brand"));
  }, [dataApi]);

  return (
    <dataContext.Provider value={{ dataApi, categoryData, brandData,filterData,setFilterData }}>
      {children}
    </dataContext.Provider>
  );
};

export default ApiDataContextProvider;
