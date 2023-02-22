import { Link } from 'react-router-dom'
import { BiShoppingBag, BiSearch, BiUserCircle } from 'react-icons/bi'

import { useAppDispatch, useAppSelector } from '../store';
import { basketOpen } from '../features/basketSlice';
import Basket from './Basket';


const Header = () => {
    const dispatch = useAppDispatch();
    const basket = useAppSelector(state => state.basket.baskets)
    const basketItem = basket.reduce((acc, item) => (acc + (item.amount)), 0)
    const basketIsOpen = useAppSelector(state => state.basket.basketStatus)

    const handleMouseEnter = () => {
        dispatch(basketOpen(true))
    }
    const handleMouseLeave = () => {
        dispatch(basketOpen(false))
    }

    return (
        <div className='relative'>
            <header className='flex justify-between items-center h-16 border shadow-sm mobileS:text-sm mobileS:px-2 laptop:text-base laptop:px-20 '>
                <Link to="/">
                    Logo
                </Link>
                <div className='tablet:flex gap-2 items-center justify-center w-96 bg-gray-200/30 p-2 rounded-lg mobileS:hidden '>
                    <input type="text" className='outline-none bg-transparent w-full ml-1 ' />
                    <BiSearch className=' text-xl text-yellow-500' />
                </div>
                <div className='flex justify-center items-center h-full'>
                    <div className='items-center border-r px-1'>
                        <div className='rounded-md bg-yellow-400/30 p-2'>
                            <Link to='#' className='flex gap-1 justify-center items-center text-center my-auto mobileS:text-xs mobileS:mx-2 laptop:text-base laptop:mx-6'>
                                <BiUserCircle className=' text-xl text-yellow-500' />
                                <div className='text-base text-gray-600'>Login</div>
                            </Link>
                        </div>
                    </div>
                    <div className='border-r p-1 mobileS:hidden tablet:inline'>
                        <button className='my-auto mx-4 p-1'>
                            TR
                        </button>
                    </div>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex static h-full p-1 z-10'>
                        {basket.length > 0
                            ?
                            <>
                                <Link to={"order"} onClick={e => console.log("click")} className='p-1 m-auto mobileS:text-lg mobileS:mx-2 laptop:mx-4 laptop:text-xl' >
                                    <BiShoppingBag className='text-yellow-600 ' />
                                </Link>
                                <div className='laptop:inline mobileS:hidden'>
                                    {basketIsOpen && <Basket />}
                                </div>
                                {basketItem > 0 && <div className=' absolute text-center mt-3 mobileS:ml-7 laptop:ml-10 rounded-full w-4 h-4 text-xs text-white bg-green-500'>{basketItem}</div>}
                            </>
                            :
                            <>
                                <div className='p-1 m-auto mobileS:text-lg mobileS:mx-2 laptop:mx-4 laptop:text-xl' >
                                    <BiShoppingBag className='text-yellow-600 ' />
                                </div>
                                <div className='laptop:inline mobileS:hidden'>
                                    {basketIsOpen && <Basket />}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Header
