import { useState } from "react";
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import CommentBox from "./CommentBox";

const NavbarItem = ({ title, classProps }) => {
    const history = useHistory();
    return (
        <li onClick={() => { history.push(`/${title}`) }} className={`hover:text-[#acacac] mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}


const Navbar = () => {

    const [connectStat, setConnect] = useState(false);

    const [MenuStatus, setMenuStatus] = useState(false);
    const handleMenu = () => {
        setMenuStatus(prevStatus => !prevStatus);
    }
    function handleConnect() {
        setConnect(prev => !prev)
        console.log('connects');
    }

const [commentStatus, setCommentStatus] = useState(false);
    return (
        <motion.nav className='w-[100%] bg-none md:w-[90%] md:mx-auto gap-3 flex  justify-between items-center py-4 px-1 z-[25] text-[#f2f2f2]'
            variants={slideIn('down', 'spring', 0.1, 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}


        >
            <div className='flex w-[20%] flex-col justify-start items-center'>
                <h1 className="text-[30px] head">Travel</h1>
                <img src='/image/arrow.png' alt="logo" className='w-[60px] pl-2 -mt-3 sm:ml-0 sm:w-[100px] cursor-pointer' />

            </div>
            <div className='hidden text-white lg:hidden list-none flex-col justify-between items-center text-[32px]'>
                {!MenuStatus && <HiMenuAlt4 onClick={handleMenu} />}
                {
                    MenuStatus && <ul className='z-20 fixed md:hidden list-none flex-col top-0 text-[16px] text-center -right-2 p-3 w-[70vw] h-screen shadow-2xl justify-start rounded-md blue-glassmorphism text-[#] animate-slide-in leading-normal '>

                        <li><AiOutlineClose onClick={handleMenu} /></li>
                        <div className='text-right gap-3 flex flex-col'>

                            {["Explore", "Create",].map((item, index) => {
                                return <NavbarItem key={item + index} title={item} />
                            })}




                        </div>

                    </ul>
                }
            </div>
            <div className="hidden md:flex flex-row gap-10">
                <a href="/">Home</a>
                <a href="#">About</a>
                <div className=" relative bodyComment"><a href="#" className="  flex flex-row items-center gap-1" onMouseOver={()=>{setCommentStatus(true)}}  >Services <MdOutlineKeyboardArrowDown />  </a>

                    <div className={` bg-[#f2f2f242] absolute mt-2 flex-col ${commentStatus?'flex':'hidden'} p-4 rounded-md w-[225px]  myComment`} onMouseLeave={()=>{setCommentStatus(false)}}>
                        <a href="#">Honeymoon Packages</a>
                        <a href="#">Tours Packages</a>
                     
                        <a href="#">Musical Events</a>
                        <a href="#">Build Package</a>
                    </div>
                </div>

                <a href="#">Upcomming Packages</a>
            </div>
            <div className="">
                <button className="bg-[#DF6951] hover:bg-[#c3533c] duration-300 transition text-[#f2f2f2] px-3 py-2 rounded-md">Get in Touch</button>
            </div>
        </motion.nav>

    );
}

export default Navbar;
