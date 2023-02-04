
const RestaurantBanner = () => {
    return (
        <div className='flex justify-between items-center bg-gray-700 h-38 rounded-xl w-full'>
            <div className='flex gap-8 p-3 items-center '>
                <div className='w-28 h-28 rounded-full bg-green-200'></div>
                <div className='text-white'>
                    <div className='text-2xl'>Restaurant Name</div>
                    <div className='text-base'>Restaurant Detail</div>
                </div>
            </div>
            <div className='flex justify-center items-center text-center '>
                <div className='border-r border-gray-500 px-10'>
                    <div className='text-yellow-600 text-2xl'>24</div>
                    <div className='text-white'>Total item</div>
                </div>
                <div className='border-r border-gray-500 px-10'>
                    <div className='text-yellow-600 text-2xl'>09</div>
                    <div className='text-white'>Category</div>
                </div>
                <div className='px-10'>
                    <div className='text-yellow-600 text-2xl'>+5</div>
                    <div className='text-white'>Raiting</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantBanner