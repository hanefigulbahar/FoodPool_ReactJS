import { Link } from "react-router-dom";
import { Restaurant } from "../types/products";
import { TiStarFullOutline } from "react-icons/ti";

const RestaurantCard = ({ id, name, food_photos, category }: Restaurant) => {
  const clickRestaurantData = (restaurant: string) => {
    window.localStorage.setItem("restaurant", restaurant);
  };

  return (
    <div key={id} className="m-auto h-72 w-72">
      <Link onClick={() => clickRestaurantData(id)} to={"/" + name + "/" + id}>
        <img
          className="h-2/3 rounded-3xl object-cover w-full"
          src={food_photos}
          alt={name}
        />
        <div className="my-3">{name}</div>
        <div className="flex justify-start items-center text-center gap-6">
          <div className="flex gap-1 justify-center items-center text-center">
            <TiStarFullOutline className="text-base text-gray-300 " />
            <div className="text-sm font-semibold">4.5</div>
          </div>
          <ul className="list-disc font-normal">
            <li className=" font-semibold text-gray-400">{category}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
