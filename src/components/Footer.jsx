import { RxTwitterLogo, RxInstagramLogo, RxDiscordLogo } from 'react-icons/rx';
import { AiOutlineYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaFacebookMessenger, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {


    const scrollToTopAndNavigate = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }


    return (<div className="w-[100] lg:w-[90%] my-20 md:mx-auto gap-5 flex flex-col md:flex-row justify-between   p-4 items-center md:items-stretch border-b-[#181433b4] pb-10 border-b-[1px] relative">

        <div className="flex flex-col items-start justify-between gap-3 w-[100%] md:w-[40%]">
            <div className='flex w-[20%] flex-col justify-start items-center'>
                <h1 className="text-[30px] head">Travel</h1>
                <img src='/image/arrow.png' alt="logo" className='w-[60px] pl-2 -mt-3 sm:ml-0 sm:w-[100px] cursor-pointer' />

            </div>

            <p className="text-[16px] leading-[26px] text-[#181433]">
                Travel helps companies <br /> manage payments easily.
            </p>



            <div className="flex flex-row gap-3">
                <FaLinkedin fontSize='33px' className='text-[#F15A2B] cursor-pointer' />
                <FaFacebookMessenger fontSize='33px' className='text-[#F15A2B] cursor-pointer' />
                <RxInstagramLogo fontSize='33px' className='text-[#F15A2B] cursor-pointer' />
                <RxTwitterLogo fontSize='33px' className='text-[#F15A2B] cursor-pointer' />
            </div>

        </div>

        <div className='flex flex-col text-left w-[100%] md:w-[25%] items-start justify-between gap-3 '>
            <h1 className='text-[#26px] font-bold'>Company</h1>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
        </div>

        <div className='flex flex-col text-left w-[100%] md:w-[25%] items-start justify-between gap-3 '>
            <h1 className='text-[#26px] font-bold'>Destinations</h1>
            <a href="#">Maldives</a>
            <a href="#">Los Angelas</a>
            <a href="#">Las Vegas</a>
            <a href="#">Toronto</a>
        </div>

        <div className='flex flex-col items-start w-[100%] md:w-[35%] justify-between gap-1'>
            <h1 className=' text-[#26px] font-bold'>Join Our Newsletter</h1>
            <div className='bg-[#eeeeff] flex flex-row items-center justify-between w-[100%] sm:w-[100%] h-[60px] pl-[1rem] rounded-sm'>
                <input type="text" className='outline-none bg-[#eeeeff] text-[#2B2B2B]' placeholder='Enter your email here' />
                <button className='flex flex-row items-center justify-center h-[60px] w-[40%] bg-[#F15A2B] hover:bg-[#c3533c] duration-300 transition rounded-sm text-[#fff]'>Subscribe</button>
            </div>
            <p>* Will send you weekly updates for your better tour packages.</p>
        </div>



    </div>);
}

export default Footer;