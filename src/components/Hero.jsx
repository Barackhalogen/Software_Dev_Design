import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Header from "../components/Header";

const Hero = () => {



    return (
        <div className=" h-[100%]  text-[#f2f2f2] w-[100%] flex flex-col justify-center items-center relative bg-[#000] " >
            <div className='absolute top-0 left-0 w-full'>      <Header />      </div>
            <img src="../image/herobg.png" alt="Hero Background" className="background-image" />
            <div className="absolute z-[10] w-full  lg:w-[90%] md:mx-auto  gap-2 md:gap-5 flex justify-between items-start flex-col p-4 md:mt-0 mt-5">
                <img src="../image/vector.png" alt="vector" className='w-[45px] md:w-[100px]' />
                <h1 className='leading-tight w-full md:w-[50%] font-bold text-[20px] md:text-[55px]  '>No matter where you're going to, we'll take you there</h1>
                <div className="hidden md:flex md:w-[50%] flex-row p-4 bg-[#f2f2f270] gap-5 rounded-md justify-between items-center text-[#fff] ">
                    <h1>Where to?  </h1> <h1>|</h1>
                    <h1 className='flex flex-row gap-1 items-center'>Travel Type <MdOutlineKeyboardArrowDown />  </h1> <h1>|</h1>
                    <h1 className='flex flex-row gap-1 items-center'>Duration <MdOutlineKeyboardArrowDown />  </h1>

                    <button className="bg-[#DF6951] text-[#f2f2f2] hover:bg-[#c3533c] duration-300 transition px-3 py-2 rounded-md">Get in Touch</button>

                </div>
                <div className='hidden md:flex flex-row items-center w-full gap-5 md:w-[50%]'>
                    <img src="../image/group.png" alt="" />
                    <p className='text-sm'>2,500 people booked Tomomorowland Event in last 24 hours</p>
                </div>
            </div>
        </div>



    );
}

export default Hero;