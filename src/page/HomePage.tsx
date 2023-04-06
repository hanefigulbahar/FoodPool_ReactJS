import React, { useEffect } from "react";
import Banner from "../components/Banner";

import CuisineCell from "../components/CuisineCell";
import RestaurantCard from "../components/RestaurantCard";
import { useAppDispatch, useAppSelector } from "../store/hook";
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
  function fetchData() {
    if (allData.length === 0) {
      RestaurantServices.getAllData()
        .then((res) => dispatch(addRestaurantData(res)))
        .catch((err) => console.log(err));
      RestaurantServices.getCousines()
        .then((res) => dispatch(addCousineData(res)))
        .catch((err) => console.log(err));
    }
  }
  useEffect(() => {
    fetchData();
    dispatch(isLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative m-auto mobileS:m-3 tablet:m-10">
      <Banner />
      {loading && allData.length === 0 && <Loading />}
      <CuisineCell />
      <div className="grid m-auto py-10 gap-5 mobileS:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
        {allData.map((data: Restaurant) => (
          <RestaurantCard
            key={data.id}
            id={data.id}
            name={data.name}
            food_photos={data.food_photos}
            category={data.category}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
