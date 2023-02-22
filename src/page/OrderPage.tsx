import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../store'
import { addUser, addUserAddreses } from '../features/userSlice'
import { User, UserDeliveryAddress } from '../types/user'
import BasketCard from '../components/BasketCard'



const OrderPage = () => {
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(state => state.user)
    const userAddressesInfo = useAppSelector(state => state.user.addresses)

    const handlerSubmit = (e: any) => {
        e.preventDefault()
    }
    function addUsersValue({
        email = userInfo.email,
        firstName = userInfo.firstName,
        lastName = userInfo.lastName,
        phone = userInfo.phone
    }: User) {
        dispatch(addUser({ email, firstName, lastName, phone }))
    }
    function addAddresesValue({
        buildingName = userAddressesInfo?.buildingName,
        doorNumber = userAddressesInfo?.doorNumber,
        flat = userAddressesInfo?.flat,
        floor = userAddressesInfo?.floor,
        noteOrRider = userAddressesInfo?.noteOrRider
    }: UserDeliveryAddress) {
        dispatch(addUserAddreses({ buildingName, doorNumber, flat, floor, noteOrRider }))
    }
    return (
        <div>
            <header className='flex justify-between items-center h-16 border shadow-sm mobileS:text-sm mobileS:px-2 laptop:text-base laptop:px-20 '>
                <Link to={"/"}>
                    Logo
                </Link>
                <div className='flex justify-center items-center h-full'>
                    <div className='items-center border-r px-1'>
                        <div className='rounded-md bg-yellow-400/30 p-2'>
                            <Link to='#' className='flex gap-1 justify-center items-center text-center my-auto mobileS:text-xs mobileS:mx-2 laptop:text-base laptop:mx-6'>
                                <BiUserCircle className=' text-xl text-yellow-500' />
                                <div className='text-base text-gray-600'>Login</div>
                            </Link>
                        </div>
                    </div>
                    <div className='p-1 mobileS:hidden tablet:inline'>
                        <button className='my-auto mx-4 p-1'>
                            TR
                        </button>
                    </div>
                </div>
            </header >
            <div className='relative flex gap-5 p-20'>
                <form className='flex flex-col gap-10 w-2/3 '>
                    <div className='flex flex-col gap-10 shadow-lg rounded-lg p-10'>
                        <div className='flex gap-5 justify-start items-center text-center rounded-lg text-5xl'>
                            <div className='text-orange-300 bg-yellow-400/30 rounded-lg p-2'><MdOutlineDeliveryDining /></div>
                            <div className='text-2xl'>
                                Delivery Information
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <div>Delivery Address:</div>
                            <div className='flex gap-5'>
                                <TextField onChange={e => addAddresesValue({ buildingName: e.target.value })} className='w-full' size="small" color='warning' id="outlined-basic" label="Building name" variant="outlined" />
                                <TextField onChange={e => addAddresesValue({ doorNumber: e.target.value })} className='w-full' size="small" color='warning' id="outlined-basic" label="Flat" variant="outlined" />
                            </div>
                            <div className='flex gap-5 '>
                                <TextField onChange={e => addAddresesValue({ flat: e.target.value })} className='w-full' size="small" color='warning' id="outlined-basic" label="Floor" variant="outlined" />
                                <TextField onChange={e => addAddresesValue({ floor: e.target.value })} className='w-full' size="small" color='warning' id="outlined-basic" label="Door number" variant="outlined" />
                            </div>
                            <div>
                                <TextField onChange={e => addAddresesValue({ noteOrRider: e.target.value })} className='w-full' size="medium" color='warning' id="outlined-basic" label="Note to rider - e.g. building, landmark" variant="outlined" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-10 shadow-lg rounded-lg p-10'>
                            <div className='flex gap-5 justify-start items-center text-center rounded-lg text-5xl'>
                                <div className='text-orange-300 bg-yellow-400/30 rounded-lg p-2'><IoPersonCircleOutline /></div>
                                <div className='text-2xl'>
                                    Personal Information
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 '>
                                <div className='flex gap-5'>
                                    <TextField name='email' onChange={e => addUsersValue({ email: e.target.value })} className='w-full' size="small" color='warning' id="outlined-basic" label="Email" variant="outlined" />
                                </div>
                                <div className='flex gap-5  '>
                                    <TextField onChange={e => addUsersValue({ firstName: e.target.value })} className='w-full' size="small" color='warning' id="outlined-basic" label="First name" variant="outlined" />
                                    <TextField onChange={e => addUsersValue({ lastName: e.target.value })} className='w-full' size="small" color='warning' id="outlined-basic" label="Last name" variant="outlined" />
                                </div>
                                <div>
                                    <TextField onChange={e => addUsersValue({ phone: e.target.value })} className='w-full' size="medium" color='warning' id="outlined-basic" label="Mobile number" variant="outlined" />
                                </div>
                            </div>
                            <button className='bg-orange-400 w-1/3 m-auto p-4 rounded-lg text-white text-center' onClick={handlerSubmit}>Place Order</button>
                        </div>
                    </div>
                </form>
                <div className='sticky top-0 w-1/3 h-96 shadow-lg rounded-lg overflow-auto'>
                    <BasketCard />
                </div>
            </div >
        </div >
    )
}

export default OrderPage