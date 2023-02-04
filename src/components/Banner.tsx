import { BiMap } from "react-icons/bi"

const Banner = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-start h-96 rounded-lg  bg-green-100/50  mobileS:p-3 tablet:p-10' >
            <div className="w-1/3 text-gray-500 text-xl laptop:w-1/2 mobileS:w-full">Yemek, market ve günlük tüm ihtiyaçların için adresini seç, çevrendeki seçenekleri gör!</div>
            <div className="flex justify-center items-center text-center  laptop:w-1/2 mobileS:w-full rounded-md bg-white">
                <BiMap className="ml-1 text-green-500/50 text-lg" />
                <div className="flex justify-center items-center w-full  ">
                    <input placeholder="City" type="text" className="w-full outline-none px-1 p-2" />
                    <button className="bg-green-300 py-2 px-8 rounded-r-md">Find</button>
                </div>
            </div>
        </div >
    )
}

export default Banner