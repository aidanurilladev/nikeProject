import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const ProtectedRoutes = () => {
  const { user } = useAuthContext();
  function isAllow() {
    if (user.email === "adminaida@gmail.com") {
      return true;
    } else {
      return false;
    }
  }
  isAllow() ? <Outlet /> : <Navigate to="/login" />;
};

export const calcTotalPrice = (product) => {
  return product.reduce((acc, el) => {
    return acc + el.subPrice;
  }, 0);
};

export const calcSubPrice = (product) => +product.count * +product.item.price
