import OpenArt from "../components/OpenArt";
import { RxDiscordLogo, RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { BiCopy } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Soulbound = () => {

    const soulboundData = [
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
        {
            imgUrl: 'anon',
            title: 'Humanoid'
        },
    ]


    return (<div className="w-[100%] lg:w-[90%] md:mx-auto gap-5 flex justify-between  flex-col p-4 items-center md:items-stretch mb-20">
        <div className="relative">
            <OpenArt text="My Soulbound NFTs" imgUrl="openart-2" />
            <div className="absolute left-20 -bottom-10 rounded-lg">
                <img src="../image/avatar.png" alt="avatar" />
            </div>

        </div>

        <div className="flex flex-row gap-5  mt-10 justify-between">
            <div className="flex flex-col items-start gap-5">
                <h1 className="font-semibold text-[51px] ">KIKI</h1>

                <h1 className="text-[#858584] text-[22px] font-bold">Bio</h1>
                <p className="text-[22px] text-[#fff]">Been The Best Artist</p>
                <h1 className="text-[#858584] text-[22px] font-bold">Links</h1>
                <div className="flex flex-row gap-3">
                    <RxDiscordLogo fontSize='33px' className='hover:text-[#a259ff] cursor-pointer' />
                    <AiOutlineYoutube fontSize='33px' className='hover:text-[#a259ff] cursor-pointer' />
                    <RxInstagramLogo fontSize='33px' className='hover:text-[#a259ff] cursor-pointer' />
                    <RxTwitterLogo fontSize='33px' className='hover:text-[#a259ff] cursor-pointer' />
                </div>

            </div>

            <div className="flex items-start justify-start flex-col gap-5">

                <div className="flex flex-row gap-4">
                    <button className="bg-[#a259ff] flex flex-row items-center gap-1 rounded-lg py-2 px-4 text-[#fff]"> <BiCopy /> 0x2ab3f....B79C</button>
                    <button className="flex flex-row rounded-lg items-center gap-1 py-2 px-4 border-[#a259ff] border-[1px]"> <AiOutlinePlus /> Follow</button>
                </div>
            </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {soulboundData.map((item => ((
                <div className="rounded-lg min-h-[285px] p-3 justify-end  bg-cover flex flex-col bg-no-repeat gap-2 text-center" style={{ backgroundImage: `url('/image/${item.imgUrl}.png')` }} >
                    <h1 className="text-[22px] text-[#fff]">{item.title}</h1>
                    <button className=" hover:bg-[#a259ff] transition-all duration-300 text-center shadow-md rounded-lg  gap-1 py-2 px-4 border-[#a259ff] border-[1px]">Check Soulbound Tree</button>
                </div>
            ))))}
        </div>
        <div className='bg-[#A259FF] py-2 px-7 mx-auto my-10 w-[161px] rounded-lg text-center cursor-pointer hover:bg-[#6528b5]'>
            Load More
        </div>



    </div>);
}

export default Soulbound;