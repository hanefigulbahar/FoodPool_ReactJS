import { SlSocialYoutube, SlSocialTwitter, SlSocialInstagram } from 'react-icons/sl'

const Footer = () => {
    const today = new Date()
    return (
        <>
            <div className='flex items-center text-center justify-between m-10 p-10 border-t-2 border-b-2'>
                <div>logo</div>
                <ul className='flex gap-6 text-2xl'>
                    <li className='border border-gray-400 rounded-full p-2 text-gray-500 hover:bg-gradient-to-t from-orange-500 via-pink-500 to-purple-500 hover:text-white'><a href="#2"><SlSocialInstagram /></a></li>
                    <li className='border border-gray-400 rounded-full p-2 text-gray-500 hover:text-white hover:bg-blue-400'><a href="#2"><SlSocialTwitter /></a></li>
                    <li className='border border-gray-400 rounded-full p-2 text-gray-500 hover:text-white hover:bg-red-500'><a href="#2"><SlSocialYoutube /></a></li>
                </ul>
            </div>
            <div>
                <ul className='flex items-center text-center justify-between mx-12 p-10'>
                    <li>© {today.getFullYear()} Foodpool</li>
                    <ul className='grid grid-rows-1 grid-flow-col gap-4'>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cookie Policy</li>
                    </ul>
                </ul>
            </div>
        </>
    )
}

export default Footer