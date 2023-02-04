

const BasketCard = () => {
    return (
        <div className='mx-auto my-10 h-20 w-80 '>
            <div className='flex justify-between items-center text-center text-xs font-semibold'>
                <div className='flex gap-3 justify-center items-center text-center'>
                    <img className='h-20 w-24 bg-yellow-300 rounded-2xl border-none' src="" alt="" />
                    <div className='flex gap-1 items-center text-center'>
                        <div>1</div>
                        <div className='text-gray-400'>x</div>
                        <div>Greek Salad</div>
                    </div>
                </div>
                <div className='float-right text-gray-400'>€84</div>
            </div>
        </div>
    )
}

export default BasketCard