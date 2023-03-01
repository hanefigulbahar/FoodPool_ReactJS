import { useAppDispatch, useAppSelector } from "../store";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { Food } from "../types/products";
import { deleteBasketData } from "../features/basketSlice";

const BasketCard = () => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket.baskets);

  const deleteBasket = (data: Food) => {
    dispatch(deleteBasketData(data));
  };
  return (
    <>
      {basket.map(
        (data: Food) =>
          data.amount > 0 && (
            <div key={data.id} className="mx-auto my-10 p-5 h-20 max-w-80  ">
              <div className="flex justify-between items-center text-center text-xs  font-semibold">
                <div className="flex relative gap-3 justify-start items-center text-center">
                  <button
                    onClick={(e) => deleteBasket(data)}
                    className=" absolute top-0 left-0 bg-white rounded-full"
                  >
                    <AiOutlineMinusCircle className="text-orange-500 text-lg" />
                  </button>
                  <img
                    className=" h-20 w-24 object-cover rounded-2xl border-none"
                    src={data.image}
                    alt={data.name}
                  />
                  <div className="flex gap-1 w-full justify-around items-center">
                    <div>{data.amount}</div>
                    <div className="text-gray-400">x</div>
                    <div className="">{data.name}</div>
                  </div>
                </div>
                <div className="float-right text-gray-400">
                  €{data.amount * data.fee}
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default BasketCard;
