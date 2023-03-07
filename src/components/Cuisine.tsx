import { selectedCousine } from "../features/cousinesSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { Couisines } from "../types/products";

const Cuisine = () => {
  const dispatch = useAppDispatch();
  const cousineData = useAppSelector((state) => state.products.cousines);

  function clickCousineData(cousine: Couisines) {
    dispatch(selectedCousine(cousine));
  }
  return (
    <>
      {cousineData?.map((data) => (
        <button
          onClick={(e) => clickCousineData(data)}
          key={data.id}
          className="border border-gray-200 bg-gray-100/30 snap-always snap-center hover:border-green-400 hover:bg-green-100/30 rounded-lg  "
        >
          <div className="h-32 w-28">
            <div className="flex justify-center items-center h-2/3">
              <img className="w-10" src={data.img} alt={data.name} />
            </div>
            <div className="text-center">{data.name}</div>
          </div>
        </button>
      ))}
    </>
  );
};

export default Cuisine;
