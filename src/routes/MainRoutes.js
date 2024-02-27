import React from "react";
import Admin from "../components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import EditProduct from "../components/admin/EditProduct";
import Register from "../components/authentication/Register";
import Login from "../components/authentication/Login";
import ProductDetails from "../components/products/ProductDetails";
import BasketList from "../components/products/BasketList";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <Admin />,
      id: 1,
    },
    {
      link: "/",
      element: <MainPage />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 3,
    },
    {
      link: "/login",
      element: <Login />,
      id: 4,
    },
    {
      link: "/regis",
      element: <Register />,
      id: 5,
    },
    {
      link: "/details/:id",
      element: <ProductDetails />,
      id: 6,
    },
    {
      link: "/basket",
      element: <BasketList />,
      id: 7,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
