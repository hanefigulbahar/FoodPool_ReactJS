import { useAppSelector } from "../store/hook";

const RestaurantBanner = () => {
  const selectedRestaurantsByIDData = useAppSelector(
    (state) => state.restaurants.restaurant
  );

  return (
    <>
      <div className="flex justify-between items-center bg-gray-700 h-38 p-3 rounded-xl w-full tablet:flex-row mobileS:flex-col">
        <div className="flex tablet:flex-row mobileS:flex-col gap-8 p-3 items-center  ">
          <div className="w-28 h-28 p-1 bg-white rounded-full ">
            <img
              src={selectedRestaurantsByIDData?.logo_photos}
              alt={selectedRestaurantsByIDData?.name}
              className="w-28 h-28 object-contain rounded-full "
            />
          </div>
          <div className="text-white">
            <div className="text-2xl">{selectedRestaurantsByIDData?.name}</div>
            <div className=" font-thin text-xs overflow-auto  mobileS:hidden laptop:inline">
              {selectedRestaurantsByIDData?.description}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center tablet:flex-row  mobileS:flex-col mobileS:gap-5 tablet:gap-0  ">
          <div className="flex border-gray-500 px-10 tablet:border-r mobileS:flex-col-reverse tablet:flex-col">
            <div className="text-yellow-600 text-2xl">
              {selectedRestaurantsByIDData?.category}
            </div>
            <div className="text-white mobileS:border-b tablet:border-none">
              Categories
            </div>
          </div>
          <div className="flex border-gray-500 px-10 tablet:border-r mobileS:flex-col-reverse tablet:flex-col ">
            <div className="text-yellow-600 text-2xl">
              {selectedRestaurantsByIDData?.cousines?.length}
            </div>
            <div className="text-white mobileS:border-b tablet:border-none">
              Cousin
            </div>
          </div>
          <div className="flex px-10 mobileS:flex-col-reverse tablet:flex-col">
            <div className="text-yellow-600 text-2xl">+5</div>
            <div className="text-white mobileS:border-b tablet:border-none">
              Rating
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantBanner;
