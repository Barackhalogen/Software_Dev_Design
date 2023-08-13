import OpenArt from "../components/OpenArt";
import { RxDiscordLogo, RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineYoutube } from "react-icons/ai";
import { useState } from "react";
import NftCard from "../utils/NftCard";
import { BiCopy } from "react-icons/bi";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const nftData = [{
        nftPrice: "30.6 ETH",
        nftName: "Humanoid #04",
        owner_tag: "@kikis",
        image: '../image/nft-3.png',
        timeLeft: "23h:01m:03s",
        classProps: 'self-start'
    }, {
        nftPrice: "15 ETH",
        nftName: "Humanoid #01",
        owner_tag: "@kikis",
        image: '../image/nft-1.png',
        timeLeft: "24h:01m:03s", classProps: 'self-center'
    }, {
        nftPrice: "300 ETH",
        nftName: "Humanoid #02",
        owner_tag: "@covy",
        image: '../image/nft-2.png',
        timeLeft: "10h:01m:03s", classProps: 'self-end'
    },
    {
        nftPrice: "30.6 ETH",
        nftName: "Humanoid #04",
        owner_tag: "@kikis",
        image: '../image/nft-3.png',
        timeLeft: "23h:01m:03s",
        classProps: 'self-start'
    }, {
        nftPrice: "15 ETH",
        nftName: "Humanoid #01",
        owner_tag: "@kikis",
        image: '../image/nft-1.png',
        timeLeft: "24h:01m:03s", classProps: 'self-center'
    }, {
        nftPrice: "300 ETH",
        nftName: "Humanoid #02",
        owner_tag: "@covy",
        image: '../image/nft-2.png',
        timeLeft: "10h:01m:03s", classProps: 'self-end'
    },
    ]

    const [stat, setStat] = useState('Created');
    const statChange = (item) => {
        setStat(item);

    }
    const heroData = [{
        id: 1,
        num: '240k+',
        title: "Volume"
    }, {
        id: 2,
        num: '50+',
        title: "NFTs Sold"
    }, {
        id: 3,
        num: '3000+',
        title: "Followers"
    }]

    return (

        <div className="w-[100%] lg:w-[90%] md:mx-auto gap-5 flex justify-between  flex-col p-4 items-center md:items-stretch mb-20">
            <div className="relative">
                <OpenArt text="Dashboard" imgUrl="openart-2" />
                <div className="absolute left-20 -bottom-10 rounded-lg">
                    <img src="../image/avatar.png" alt="avatar" />
                </div>
            </div>

            <div className="flex flex-row gap-5  mt-10 justify-between">
                <div className="flex flex-col items-start gap-5">
                    <h1 className="font-semibold text-[51px] ">KIKI</h1>
                    <div className="grid grid-cols-3 gap-5 sm:mt-0 mt-[14rem]">
                        {heroData.map((item) => ((
                            <div className="flex flex-col gap-1" key={item.id}>
                                <h1 className="text-[#fff] font-bold text-[28px] ">{item.num}</h1>
                                <p className="text-[22px]">{item.title}</p>
                            </div>
                        )))}
                    </div>
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
                  <div className="flex flex-row gap-4">
                            <Link to="/soulbound"><button className="flex flex-row rounded-lg items-center gap-1 py-2 px-4 border-[#a259ff] border-[1px]"> Check</button></Link>
                            <h1 className="font-semibold text-[28px] text-[#fff]">My Soulbound NFTs</h1>
                </div>          

                </div>

            </div>
            <div className="flex flex-row gap-5">
                {[{ title: 'Created', num: '362' }, { title: 'Owned', num: '67' }, { title: 'Collection', num: '4' }].map((item, index) => ((
                    <div key={index} onClick={() => { statChange(item.title) }} className={`flex-start items-center justify-center ${stat === item.title ? 'border-b border-[#858584] text-[#fff]' : 'text-[#858584]'} text-[#22px] font-bold cursor-pointer flex-row flex gap-3 px-3 py-2`}> {item.title}
                        <h1 className={`rounded-lg py-1 px-2 ${stat === item.title ? 'bg-[#a259ff]' : 'bg-[#130c1f]'}`}>{item.num}</h1>
                    </div>
                )))}
            </div>

            <div className="grid grid-cols-1 gap-5 justify-between items-center md:grid-cols-3">

                {
                    nftData.map(item => ((

                        <div className={`${item.classProps}`}>
                            <NftCard
                                nftPrice={item.nftPrice}
                                nftName={item.nftName}
                                owner_tag={item.owner_tag}
                                image={item.image}
                                timeLeft={item.timeLeft}
                            />
                        </div>

                    )))
                }

            </div>


            <div className='bg-[#A259FF] py-2 px-7 mx-auto my-10 w-[161px] rounded-lg text-center cursor-pointer hover:bg-[#6528b5]'>
                Load More
            </div>

        </div>
    );
}

export default Dashboard;