import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContext from "./context/ProductContext";
import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import CardContext from "./context/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
        <CardContext>

        <App />
        <MainRoutes />
        </CardContext>
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
);
