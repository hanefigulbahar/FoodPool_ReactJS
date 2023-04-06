import { Route, Routes } from "react-router-dom";

import Layout from "./page/Layout";
import HomePage from "./page/HomePage";
import RestaurantPage from "./page/RestaurantPage";
import OrderPage from "./page/OrderPage";
//import RestaurantByCity from "./page/RestaurantByCity";
import LoginPage from "./page/LoginPage";
//<Route path="/:city" element={<RestaurantByCity />} />;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<HomePage />} />
        <Route
          path="/:restaurantName/:restaurantID"
          element={<RestaurantPage />}
        />
      </Route>
      <Route path="/order" element={<OrderPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
