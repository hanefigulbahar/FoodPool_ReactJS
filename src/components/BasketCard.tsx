import { useAppSelector } from "../store"


const BasketCard = () => {
    const basket = useAppSelector(state => state.basket.baskets)

    return (
        <>
            {basket.map(data =>
                <div key={data.id} className='mx-auto my-10 h-20 w-80 '>
                    <div className='flex justify-between items-center text-center text-xs font-semibold'>
                        <div className='flex gap-3 justify-center items-center text-center'>
                            <img className='h-20 w-24 bg-yellow-300 object-cover rounded-2xl border-none' src={data.image} alt={data.name} />
                            <div className='flex gap-1 items-center text-center'>
                                <div>{data.amount}</div>
                                <div className='text-gray-400'>x</div>
                                <div>{data.name}</div>
                            </div>
                        </div>
                        <div className='float-right text-gray-400'>€{data.amount * data.fee}</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BasketCard