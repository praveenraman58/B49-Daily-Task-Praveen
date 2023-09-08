import React, { createContext, useReducer } from "react";
import "./Card.css";
import { products } from "./Products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import { useEffect } from "react";

export const cartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Card = () => {
  //const [item, setItem] = useState(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <cartContext.Provider
      value={{ ...state, removeItem, increment, decrement }}
    >
      <ContextCart />
    </cartContext.Provider>
  );
};

export default Card;
