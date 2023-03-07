import { useEffect } from "react";

import FoodCard from "../components/FoodCard";
import RestaurantBanner from "../components/RestaurantBanner";
import { useAppDispatch, useAppSelector } from "../store";
import { RestaurantServices } from "../services";
import { selectedRestaurantsByIDData } from "../features/restaurantsSlice";
import { Food, Restaurant } from "../types/products";
import React from "react";
import { addBasketData, basketOpen } from "../features/basketSlice";

const RestaurantPage = () => {
  const dispatch = useAppDispatch();

  const filtredData: Restaurant | undefined = useAppSelector(
    (state) => state.restaurants.restaurant
  );

  const selectedRestaurant = localStorage.getItem("restaurant");

  function addBasket(id: string, item: Food) {
    dispatch(addBasketData(item));
    dispatch(basketOpen(true));
  }
  useEffect(() => {
    if (selectedRestaurant) {
      RestaurantServices.getRestaurantsByID(selectedRestaurant)
        .then((res) => dispatch(selectedRestaurantsByIDData(res)))
        .catch((err) => err);
    }
  }, [dispatch, selectedRestaurant]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex flex-col gap-5 m-auto mobileS:m-3 tablet:m-10">
      <RestaurantBanner />
      <div className="grid gap-10 my-14 mobileS:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
        <FoodCard addBasket={addBasket} data={filtredData} />
      </div>
    </div>
  );
};

export default RestaurantPage;
