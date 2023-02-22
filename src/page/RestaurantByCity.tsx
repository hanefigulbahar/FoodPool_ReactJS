import { useEffect } from "react"
import RestaurantCard from "../components/RestaurantCard"
import { addRestaurantData } from "../features/productsSlice"
import { RestaurantServices } from "../services"
import { useAppDispatch, useAppSelector } from "../store"
import { Restaurant } from "../types/products"

const RestaurantByCity = () => {
    const dispatch = useAppDispatch()
    const selectedRestaurantByCity = useAppSelector(state => state.restaurants.city)
    const allData: Restaurant[] = useAppSelector(state => state.products.restaurants)

    useEffect(() => {
        if (allData.length === 0) {
            RestaurantServices.getAllData()
                .then(res => dispatch(addRestaurantData(res)))
                .catch(err => err)
        }


    }, [allData.length, dispatch])
    const filteredData = allData.filter(data => data.address.city === selectedRestaurantByCity)

    return (
        <div>
            <RestaurantCard data={filteredData} />
        </div>
    )
}

export default RestaurantByCity