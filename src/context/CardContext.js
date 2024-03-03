import React, { createContext, useContext, useReducer } from "react";
import { ACTION_CARD } from "../helpers/const";
import { calcSubPrice, calcTotalPrice } from "../helpers/function";

const cardContext = createContext();
export const useCardContext = () => useContext(cardContext);

const INIT_STATE = {
  card: JSON.parse(localStorage.getItem("card")),
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_CARD.GET_CARD:
      return { ...state, card: action.payload };

    default:
      return state;
  }
};
const CardContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addProductToCard(product) {
    let card = JSON.parse(localStorage.getItem("card"));
    if (!card) {
      card = {
        products: [],
        totalPrice: 0,
      };
    }
    const newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    card.products.push(newProduct);
    card.totalPrice = calcTotalPrice(card.products);

    localStorage.setItem("card", JSON.stringify(card));
  }
  function checkProductInCard(id) {
    let card = JSON.parse(localStorage.getItem("card"));

    if (card) {
      let obj = card.products.find((el) => el.item.id === id);
      return obj ? true : false;
    }
  }
  function readProductFromCard() {
    let card = JSON.parse(localStorage.getItem("card"));
    if (!card) {
      localStorage.setItem(
        "card",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
    }
    dispatch({
      type: ACTION_CARD.GET_CARD,
      payload: card,
    });
  }

  function changeProductCount(count, id) {
    if (count < 1) {
      alert("error");
      return;
    }
    let card = JSON.parse(localStorage.getItem("card"));
    card.products = card.products.map((el) => {
      if (el.item.id === id) {
        el.count = count;
        el.subPrice = calcSubPrice(el);
      }
      return el;
    });
    card.totalPrice = calcTotalPrice(card.products);
    localStorage.setItem("card", JSON.stringify(card));
    readProductFromCard()
  }

  const values = {
    addProductToCard,
    checkProductInCard,
    readProductFromCard,
    card: state.card,
    changeProductCount,
  };
  return <cardContext.Provider value={values}>{children}</cardContext.Provider>;
};

export default CardContext;
