import { useEffect } from "react";
import Banner from "../components/Banner";

import CuisineCell from "../components/CuisineCell";
import RestaurantCard from "../components/RestaurantCard";
import { useAppDispatch, useAppSelector } from "../store";
import { RestaurantServices } from "../services";
import { Restaurant } from "../types/products";
import { addCousineData, addRestaurantData } from "../features/productsSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const allData: Restaurant[] = useAppSelector(
    (state) => state.products.restaurants
  );

  useEffect(() => {
    if (allData.length === 0) {
      RestaurantServices.getAllData()
        .then((res) => dispatch(addRestaurantData(res)))
        .catch((err) => console.log(err));
      RestaurantServices.getCousines()
        .then((res) => dispatch(addCousineData(res)))
        .catch((err) => console.log(err));
    }
  }, [allData.length, dispatch]);

  return (
    <div className="relative m-auto mobileS:m-3 tablet:m-10">
      <Banner />
      <CuisineCell />
      <RestaurantCard data={allData} />
    </div>
  );
};

export default HomePage;
