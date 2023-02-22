
import Cuisine from './Cuisine'

const CuisineCell = () => {

    return (
        <div className='flex flex-nowrap gap-10 overflow-auto w-full my-8 no-scrollbar'>
            <Cuisine />
        </div >
    )
}

export default CuisineCell