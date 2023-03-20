import React, { useEffect } from "react";
import Banner from "../components/Banner";

import CuisineCell from "../components/CuisineCell";
import RestaurantCard from "../components/RestaurantCard";
import { useAppDispatch, useAppSelector } from "../store";
import { RestaurantServices } from "../services";
import { Restaurant } from "../types/products";
import { addCousineData, addRestaurantData } from "../features/productsSlice";
import { isLoading } from "../features/loadingSlice";
import Loading from "../components/Loading";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loadings.loading);

  const allData: Restaurant[] = useAppSelector(
    (state) => state.products.restaurants
  );

  useEffect(() => {
    dispatch(isLoading(true));
    if (allData.length === 0) {
      RestaurantServices.getAllData()
        .then((res) => dispatch(addRestaurantData(res)))
        .then(() => dispatch(isLoading(false)))
        .catch((err) => console.log(err));
      RestaurantServices.getCousines()
        .then((res) => dispatch(addCousineData(res)))
        .then(() => dispatch(isLoading(false)))
        .catch((err) => console.log(err));
    }
  }, [allData.length, dispatch]);

  return (
    <div className="relative m-auto mobileS:m-3 tablet:m-10">
      <Banner />
      {loading && allData.length === 0 && <Loading />}
      <CuisineCell />
      <RestaurantCard data={allData} />
    </div>
  );
};

export default HomePage;
