import { BiMap } from "react-icons/bi"
import { Link } from "react-router-dom"
import { searchRestaurantByCity } from "../features/restaurantsSlice"
import { useAppDispatch, useAppSelector } from "../store"


const Banner = () => {
    const dispatch = useAppDispatch()
    const cityValues = useAppSelector(state => state.restaurants.city)


    return (
        <div className='flex flex-col gap-5 justify-center items-start h-96 rounded-lg  bg-contain bg-right bg-no-repeat tablet:bg-banner1 bg-green-200/40 mobileS:bg-none  mobileS:p-3 tablet:p-10' >
            <div className="w-1/3 text-gray-600 text-xl laptop:w-1/2 mobileS:w-full">Yemek, market ve günlük tüm ihtiyaçların için adresini seç, çevrendeki seçenekleri gör!</div>
            <div className="flex justify-center items-center text-center  laptop:w-1/2 mobileS:w-full rounded-md bg-white">
                <BiMap className="ml-1 text-green-500/50 text-lg" />
                <div className="flex justify-center items-center w-full  ">
                    <input onChange={e => dispatch(searchRestaurantByCity(e.target.value))} placeholder="City" type="text" className="w-full outline-none px-1 p-2" />
                    <Link to={"/" + cityValues} className="bg-green-300 py-2 px-8 rounded-r-md">Find</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner