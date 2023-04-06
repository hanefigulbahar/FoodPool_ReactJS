import { MdOutlinePersonPinCircle } from "react-icons/md";
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hook";

import BasketCard from "./BasketCard";

const Basket = () => {
  const basket = useAppSelector((state) => state.basket.baskets);

  const deliveryFee: number = 84;
  const total =
    basket.reduce((acc, item) => acc + item.amount * item.fee, 0) + deliveryFee;
  return (
    <>
      {basket.length > 0 ? (
        <div className="absolute top-16 h-screen  rounded-xl right-0 w-96 bg-white ">
          <div className="h-2/3 overflow-auto">
            <div className="flex flex-col gap-6 ">
              <div className="flex justify-center mt-10">
                <SlBasketLoaded className=" text-green-400 text-4xl" />
              </div>
              <div className="text-center text-gray-400 font-semibold">
                Your orders
              </div>
            </div>
            <BasketCard />
          </div>
          <div className="mx-auto w-80 h-1/4 border-dashed border-t-2 border-gray-400/5 ">
            <div className="mx-auto my-2 h-14 w-80 ">
              <div className="flex justify-between items-center text-center text-xs font-semibold">
                <div className="flex gap-3 justify-center items-center text-center">
                  <div className="flex justify-center items-center h-14 w-20 bg-yellow-400/30 rounded-2xl border-none">
                    <MdOutlinePersonPinCircle className="text-2xl text-yellow-600" />
                  </div>
                  <div className="flex flex-col gap-1 items-center text-center">
                    <div>Delivery</div>
                    <div className="text-yellow-400">30-40 min</div>
                  </div>
                </div>
                <div className="float-right text-gray-400">€{deliveryFee}</div>
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <div>Total Amount:</div>
              <div className="text-xl">€{total}</div>
            </div>
            <Link
              to={"order"}
              className="flex justify-center items-center m-auto my-3 h-14 w-80 bg-green-500/60 rounded-xl text-white"
            >
              Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="absolute top-16 h-screen  rounded-xl right-0 w-96 bg-white ">
          <div className="flex flex-col gap-6 justify-center h-2/3 overflow-auto">
            <div className="flex justify-center mt-10">
              <SlBasket className=" text-green-400 text-4xl" />
            </div>
            <div className="text-center text-gray-400 font-semibold">
              Your basket is empty!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
