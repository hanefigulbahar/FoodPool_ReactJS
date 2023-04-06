import { BiMap } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { searchRestaurantByCity } from "../features/restaurantsSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Restaurant } from "../types/products";

const Banner = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cityValues = useAppSelector((state) => state.restaurants.city);
  const allData: Restaurant[] = useAppSelector(
    (state) => state.products?.restaurants
  );
  const searchHandle = () => {
    if (allData.find((data) => data.address?.city === cityValues)) {
      navigate("/" + cityValues);
      dispatch(searchRestaurantByCity(""));
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-start h-96 rounded-lg  bg-contain bg-right bg-no-repeat tablet:bg-banner1 bg-green-200/40 mobileS:bg-none  mobileS:p-3 tablet:p-10">
      <div className="w-1/3 text-gray-600 text-xl laptop:w-1/2 mobileS:w-full">
        Choose your address for food, market and all your daily needs, see the
        options around you!
      </div>
      <div className="flex justify-center items-center text-center  laptop:w-1/2 mobileS:w-full rounded-md bg-white">
        <BiMap className="ml-1 text-green-500/50 text-lg" />
        <div className="flex justify-center items-center w-full  ">
          <input
            data-testid="search-city"
            onChange={(e) => dispatch(searchRestaurantByCity(e.target.value))}
            placeholder="City"
            type="text"
            className="w-full outline-none px-1 p-2"
            value={cityValues}
          />
          {cityValues?.length !== 0 ? (
            <button
              data-testid="banner-search"
              onClick={searchHandle}
              className="bg-green-300 py-2 px-8 rounded-r-md">
              Find
            </button>
          ) : (
            <div className="bg-green-200 py-2 px-8 rounded-r-md">Find</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
