import { BsFillPlusCircleFill } from 'react-icons/bs'

const FoodCard = () => {
    const addBasket = () => {
    }
    return (
        <div className="relative flex justify-center items-end m-auto text-white h-72 w-60">
            <div className='absolute top-0'>
                <div className=' h-36 w-36 rounded-full bg-green-200' />
            </div>
            <div className='flex justify-center pt-10 h-60 w-60 rounded-lg shadow-md text-black/60 border border-white hover:border-orange-200'>
                <div className='flex flex-col justify-center text-center gap-3 w-60 mt-12  px-8'>
                    <div className='text-xl font-semibold'>Kurufasulle</div>
                    <div className='border-y border-gray-200  p-2'>
                        3 kişilik
                    </div>
                    <div className='flex justify-between text-2xl text-orange-300'>
                        <div className='font-semibold'>
                            €28
                        </div>
                        <button onClick={addBasket}><BsFillPlusCircleFill /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard