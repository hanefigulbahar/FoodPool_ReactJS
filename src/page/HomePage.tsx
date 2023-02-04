import Banner from "../components/Banner"

import CuisineCell from "../components/CuisineCell"
import RestaurantCell from "../components/RestaurantCell"

const HomePage = () => {
    return (
        <div className="relative m-auto mobileS:m-3 tablet:m-10" >
            <Banner />
            <CuisineCell />
            <RestaurantCell />
        </div>
    )
}

export default HomePage