import { useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { addBasketData } from "../features/basketSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { Food, Restaurant } from "../types/products";

const FoodCard = (props: { data: Restaurant | undefined }) => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket.baskets);

  const addBasket = (data: Food) => {
    dispatch(addBasketData(data));
  };

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      {props.data?.menu?.map((data: Food) => (
        <div
          key={data.id}
          className="relative flex justify-center items-end m-auto text-white h-80 w-60"
        >
          <img
            src={data.image}
            alt={data.image}
            className=" absolute top-0 h-36 w-36  rounded-full object-cover"
          />
          <div className="flex justify-center pt-10 max-h-72 w-60 rounded-lg shadow-md text-black /60 border border-white hover:border-orange-200">
            <div className="flex flex-col justify-center text-center gap-2 w-72 mt-12 p-8">
              <div className="font-semibold">{data.name}</div>
              <div className="border-y border-gray-200  p-2">3 kişilik</div>
              <div className="flex justify-between text-2xl text-orange-300">
                <div className="font-semibold">{data.fee}</div>
                <button onClick={(e) => addBasket(data)}>
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
