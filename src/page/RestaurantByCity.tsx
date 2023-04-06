import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store/hook";
import { RestaurantServices } from "../services";
import { Restaurant } from "../types/products";
import { addRestaurantData } from "../features/productsSlice";
import Loading from "../components/Loading";
import { isLoading } from "../features/loadingSlice";

const RestaurantByCity = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loadings.loading);
  const location = useLocation();
  const allData: Restaurant[] = useAppSelector(
    (state) => state.products?.restaurants
  );

  const searchCity = location.pathname.split("/")[1];

  const bannerImg = allData.find(
    (data) => data.address?.city === location.pathname.split("/")[1]
  );

  const fetchData = () => {
    if (allData.length === 0) {
      dispatch(isLoading(true));
      RestaurantServices.getAllData()
        .then((res) => dispatch(addRestaurantData(res)))
        .then(() => dispatch(isLoading(false)))
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filteredData = allData.filter(
    (data) => data.address?.city === location.pathname.split("/")[1]
  );
  console.log(allData);

  return (
    <>
      {loading && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2  ">
          <Loading />
        </div>
      )}
      <div className="relative w-screen h-96">
        <img
          className="object-cover opacity-50 w-full h-full"
          src={bannerImg?.address?.img}
          alt={bannerImg?.address?.city}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 text-5xl font-light opacity-40">
          {bannerImg?.address?.city.toLocaleUpperCase()}
        </div>
      </div>
    </>
  );
};

export default RestaurantByCity;
