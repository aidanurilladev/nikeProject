import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { API_BASKET, API_PRODUCTS } from "../helpers/const";
import { useLocation, useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  data: [],
  oneProduct: {},
  basket: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    case "GET_ONE":
      return { ...state, oneProduct: action.payload };
    case "GET_BASKET":
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }
  async function readProduct() {
    let { data } = await axios(`${API_PRODUCTS}/${window.location.search}`);
    dispatch({
      type: "GET",
      payload: data,
    });
  }
  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let { data } = await axios(`${API_PRODUCTS}/${id}`);
    dispatch({
      type: "GET_ONE",
      payload: data,
    });
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API_PRODUCTS}/${id}`, editedProduct);
    readProduct();
  }

  //! Pagination
  const [page, setPage] = useState(1);
  const itemPerPage = 6;
  const count = Math.ceil(state.data.length / itemPerPage);

  function currenPage() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return state.data.slice(begin, end);
  }
  //! Pagination

  //! Filter

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
    readProduct();
  };

  function sortByPrice(value) {
    if (value === "all") {
      readProduct();
    } else if (value === "high_low") {
      let result = state.data.sort((a, b) => +b.price - +a.price);
      dispatch({
        type: "GET",
        payload: result,
      });
    } else if (value === "low_high") {
      let result = state.data.sort((a, b) => +a.price - +b.price);
      dispatch({
        type: "GET",
        payload: result,
      });
    }
  }
  //! Filter

  //! SEARCH

  function searchValue(search) {
    let result = state.data.filter(
      (el) =>
        el.name.toLowerCase().includes(search) ||
        el.price.toString().includes(search)
    );
    dispatch({
      type: "GET",
      payload: result,
    });
    if (!search) {
      readProduct();
    }
  }

  //! SEARCH

  //! BASKET

  async function addBasket(newProduct) {
    await axios.post(API_BASKET, newProduct);
  }

  async function readBasket() {
    let { data } = await axios(API_BASKET);
    dispatch({
      type: "GET_BASKET",
      payload: data,
    });
  }

  //! BASKET

  const values = {
    addProduct,
    readProduct,
    data: state.data,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    setPage,
    currenPage,
    count,
    fetchByParams,
    sortByPrice,
    searchValue,
    addBasket,
    readBasket,
    basket: state.basket,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
