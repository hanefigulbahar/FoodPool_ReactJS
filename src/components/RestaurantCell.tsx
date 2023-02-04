import { TiStarFullOutline } from "react-icons/ti"
import { Link } from "react-router-dom"

const RestaurantCell = () => {
    return (
        <div className="grid m-auto gap-5 mobileS:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
            <div className="m-auto h-72 w-72">
                <Link to={"#"}>
                    <div className="h-2/3 rounded-3xl">img</div>
                    <div className="my-3">Restaurant Name</div>
                    <div className="flex justify-start items-center text-center gap-6">
                        <div className="flex gap-1 justify-center items-center text-center">
                            <TiStarFullOutline className="text-base text-gray-300 " />
                            <div className="text-sm font-semibold">4.5</div>
                        </div>
                        <ul className="list-disc font-normal">
                            <li className=" font-semibold text-gray-400">category</li>
                        </ul>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RestaurantCell