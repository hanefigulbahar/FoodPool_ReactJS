import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import RestaurantCard from "../components/RestaurantCard";
import { useAppDispatch, useAppSelector } from "../store";
import { RestaurantServices } from "../services";
import { Restaurant } from "../types/products";
import { addRestaurantData } from "../features/productsSlice";

const RestaurantByCity = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const allData: Restaurant[] = useAppSelector(
    (state) => state.products?.restaurants
  );

  useEffect(() => {
    if (allData.length === 0) {
      RestaurantServices.getAllData()
        .then((res) => dispatch(addRestaurantData(res)))
        .catch((err) => err);
    }
  }, [allData.length, dispatch]);
  const filteredData = allData.filter(
    (data) => data.address.city === location.pathname.split("/")[1]
  );
  return (
    <div>
      <RestaurantCard data={filteredData} />
    </div>
  );
};

export default RestaurantByCity;
