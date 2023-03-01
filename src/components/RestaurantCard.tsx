import { Link } from "react-router-dom";

import { useAppSelector } from "../store";
import { Restaurant } from "../types/products";
import { TiStarFullOutline } from "react-icons/ti";

const RestaurantCard = (props: { data: Restaurant[] }) => {
  const selectedCousinData = useAppSelector((state) => state.cousines);
  let filteredData = props.data?.filter((data: Restaurant) =>
    data.cousines?.includes(selectedCousinData.name)
  );

  const clickRestaurantData = (restaurant: string) => {
    window.localStorage.setItem("restaurant", restaurant);
  };

  return (
    <div className="grid m-auto py-10 gap-5 mobileS:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
      {selectedCousinData?.name.length === 0 ||
      selectedCousinData.name === "All"
        ? props.data?.map((data: Restaurant) => (
            <div key={data?.id} className="m-auto h-72 w-72">
              <Link
                onClick={() => clickRestaurantData(data.id)}
                to={"/" + data?.name + "/" + data?.id}
              >
                <img
                  className="h-2/3 rounded-3xl object-cover w-full"
                  src={data?.food_photos}
                  alt={data?.name}
                />
                <div className="my-3">{data?.name}</div>
                <div className="flex justify-start items-center text-center gap-6">
                  <div className="flex gap-1 justify-center items-center text-center">
                    <TiStarFullOutline className="text-base text-gray-300 " />
                    <div className="text-sm font-semibold">4.5</div>
                  </div>
                  <ul className="list-disc font-normal">
                    <li className=" font-semibold text-gray-400">
                      {data?.category}
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          ))
        : filteredData?.map((data: Restaurant) => (
            <div key={data.id} className="m-auto h-72 w-72">
              <Link
                onClick={() => clickRestaurantData(data.id)}
                to={"/" + data.name + "/" + data.id}
              >
                <img
                  className="h-2/3 rounded-3xl object-cover w-full"
                  src={data.food_photos}
                  alt={data.name}
                />
                <div className="my-3">{data.name}</div>
                <div className="flex justify-start items-center text-center gap-6">
                  <div className="flex gap-1 justify-center items-center text-center">
                    <TiStarFullOutline className="text-base text-gray-300 " />
                    <div className="text-sm font-semibold">4.5</div>
                  </div>
                  <ul className="list-disc font-normal">
                    <li className=" font-semibold text-gray-400">
                      {data.category}
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default RestaurantCard;
