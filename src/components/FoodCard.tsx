import React, { useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useAppSelector } from "../store/hook";
import { Food, Restaurant } from "../types/products";

interface FoodCardProps {
  data: Restaurant | undefined;
  addBasket: (id: string, item: Food) => void;
}
const FoodCard = ({ data, addBasket }: FoodCardProps) => {
  const basket = useAppSelector((state) => state.basket.baskets);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      {data?.menu?.map((data: Food) => (
        <div
          key={data.id}
          className="relative flex justify-center items-end m-auto text-white h-80 w-60"
        >
          <img
            src={data.image}
            alt={data.image}
            className=" absolute top-0 h-36 w-36 bg-white  rounded-full object-cover"
          />
          <div className="flex justify-center pt-10 max-h-72 w-60 rounded-lg shadow-md text-black /60 border border-white hover:border-orange-200">
            <div className="flex flex-col justify-center text-center gap-2 w-72 mt-12 p-8">
              <div className="font-semibold">{data.name}</div>
              <div className="border-y border-gray-200 font-thin text-sm p-2">
                1 portion
              </div>
              <div className="flex justify-between text-2xl text-orange-300">
                <div className="font-semibold">${data.fee}</div>
                <button
                  className="active:animate-ping ease-in-out duration-500 "
                  onClick={() => addBasket(data.id, data)}
                >
                  <BsFillPlusCircleFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodCard;
