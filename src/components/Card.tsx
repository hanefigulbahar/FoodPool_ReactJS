import { TiStarFullOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <div className="h-72 w-80">
            <Link to={"#"}>
                <div className="bg-green-300 h-2/3 rounded-3xl">img</div>
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
    )
}

export default Card