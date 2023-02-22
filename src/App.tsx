import { Route, Routes } from "react-router-dom";

import Layout from "./page/Layout";
import HomePage from "./page/HomePage";
import RestaurantPage from "./page/RestaurantPage";
import OrderPage from "./page/OrderPage";
import RestaurantByCity from "./page/RestaurantByCity";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="/:restaurantName/:restaurantID" element={<RestaurantPage />} />
        <Route path="/:city" element={<RestaurantByCity />} />
      </Route>
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  )
}
export default App;
