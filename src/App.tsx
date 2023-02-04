import { Route, Routes } from "react-router-dom";

import Layout from "./page/Layout";
import HomePage from "./page/HomePage";
import Restaurant from "./page/RestaurantPage";
import OrderPage from "./page/OrderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="/restaurantname" element={<Restaurant />} />
      </Route>
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  )
}
export default App;
