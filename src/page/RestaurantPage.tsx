import CuisineCell from '../components/CuisineCell'
import FoodCard from '../components/FoodCard'
import RestaurantBanner from '../components/RestaurantBanner'

const Restaurant = () => {
    return (
        <div className="relative flex flex-col gap-5 m-auto mobileS:m-3 tablet:m-10" >
            <RestaurantBanner />
            <CuisineCell />
            <div className="grid gap-10 mobileS:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
                <FoodCard />
            </div>
        </div >
    )
}

export default Restaurant