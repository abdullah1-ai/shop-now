import { createContext, useReducer, useState } from "react";
import { toast } from "react-toastify";

export const AddToCartContext = createContext();

function AddToCartContextProvider({ children }) {
  const [applyPromo, setApplyPromo] = useState(
    () => JSON.parse(localStorage.getItem("PromoApply")) || false,
  );
  function Reducer(state, action) {
    if (action.type === "AddToCart") {
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...state, action.payload]),
      );
      return [...state, action.payload];
    } else if (action.type === "IncreaseCartQuantity") {
      const arrCart = [...state];
      const findObj = { ...arrCart[action.payload.foundIndex] };
      findObj.quantity += 1;
      arrCart[action.payload.foundIndex] = findObj;
      localStorage.setItem("cartItems", JSON.stringify(arrCart));

      return arrCart;
    } else if (action.type === "DecreaseCartQuantity") {
      const arrCart = [...state];
      const findObj = { ...arrCart[action.payload.foundIndex] };
      if (findObj.quantity > 1) {
        findObj.quantity -= 1;
        arrCart[action.payload.foundIndex] = findObj;
        localStorage.setItem("cartItems", JSON.stringify(arrCart));

        return arrCart;
      } else {
        let filterRemoveItem = arrCart.filter((item, i) => {
          return i !== action.payload.foundIndex;
        });

        localStorage.setItem("cartItems", JSON.stringify(filterRemoveItem));

        return filterRemoveItem;
      }
    } else if (action.type === "RemoveCart") {
      const arrCart = [...state];
      const findObj = { ...arrCart[action.payload.foundIndex] };
      let filterRemoveItem = arrCart.filter((item, i) => {
        return i !== action.payload.foundIndex;
      });
      if (filterRemoveItem.length == 0) {
        setApplyPromo(false);
      }
      localStorage.setItem("cartItems", JSON.stringify(filterRemoveItem));

      return filterRemoveItem;
    }

    else if (action.type === "EditQuantity") {
      const arrCart = [...state];
      const findObj = { ...arrCart[action.payload.foundIndex] };
      findObj.quantity = Number(action.payload.quantity);
      arrCart[action.payload.foundIndex] = findObj;
      localStorage.setItem("cartItems", JSON.stringify(arrCart));

      return arrCart;
    }
  }

  const initialCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [addToCartRed, dispatch] = useReducer(Reducer, initialCart);

  function isAlreadyExists(itemExits, sign = "", quantity) {
    const found = addToCartRed.find((item) => {
      return item.id === itemExits.id;
    });
    const foundIndex = addToCartRed.findIndex((item) => {
      return item.id === itemExits.id;
    });
    if ((found && sign == "") || sign == "+") {
      dispatch({
        type: "IncreaseCartQuantity",
        payload: { found, foundIndex },
      });
      toast("Item Quantity Increased");
    } else if (found && sign == "-") {
      dispatch({
        type: "DecreaseCartQuantity",
        payload: { found, foundIndex },
      });
      toast("Item Quantity Decreased");
    } else if (found && sign == "remove") {
      dispatch({ type: "RemoveCart", payload: { found, foundIndex } });
      toast("Item Remove From Cart");
    } else if (found && sign == "editQuantity") {
      dispatch({
        type: "EditQuantity",
        payload: { found, foundIndex, quantity },
      });
      toast("Item Quantity Updated");
    } else {
      let obj = { ...itemExits, quantity: 1 };
      dispatch({ type: "AddToCart", payload: obj });
      toast("Item Added to Cart");
    }
  }

  const [addtoCart, setAddtoCart] = useState([]);
  return (
    <AddToCartContext.Provider
      value={{
        addtoCart,
        setAddtoCart,
        addToCartRed,
        dispatch,
        isAlreadyExists,
        applyPromo,
        setApplyPromo,
      }}
    >
      {children}
    </AddToCartContext.Provider>
  );
}

export default AddToCartContextProvider;
