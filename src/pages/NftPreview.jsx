import { GiWireframeGlobe } from 'react-icons/gi'
import Countdown from '../utils/CountDown';
import NftCard from '../utils/NftCard';
import { useLocation, useHistory } from 'react-router-dom';
const NftPreview = () => {
  
    const history = useHistory();
    const location = useLocation();
    const { nftName, mintDate, creatorPic, creatorName, nftDesc, etherLink, targetTime, nftPic } = location.state;
    const formattedDate = mintDate.toLocaleDateString();
    const nftData = [{
        nftPrice: "30.6 ETH",
        nftName: "Humanoid #04",
        owner_tag: creatorName,
        image: '../image/nft-3.png',
        timeLeft: new Date(2023, 10, 1, 12, 0, 0),
        classProps: 'self-start',
        id: 1
    }, {
        nftPrice: "15 ETH",
        nftName: "Humanoid #01",
        owner_tag: creatorName,
        image: '../image/nft-1.png',
        timeLeft: new Date(2023, 10, 1, 14, 0, 0), classProps: 'self-center',id: 2
    }, {
        nftPrice: "300 ETH",
        nftName: "Humanoid #02",
        owner_tag: creatorName,
        image: '../image/nft-2.png',
        timeLeft: new Date(2023, 10, 1, 13, 0, 0), classProps: 'self-end',id: 3
    },
    {
        nftPrice: "30.6 ETH",
        nftName: "Humanoid #04",
        owner_tag: creatorName,
        image: '../image/nft-3.png',
        timeLeft: new Date(2023, 10, 1, 16, 0, 0),
        classProps: 'self-start',id: 4
    }, {
        nftPrice: "15 ETH",
        nftName: "Humanoid #01",
        owner_tag: creatorName,
        image: '../image/nft-1.png',
        timeLeft: new Date(2023, 10, 1, 17, 0, 0), classProps: 'self-center',id: 5
    }, {
        nftPrice: "300 ETH",
        nftName: "Humanoid #02",
        owner_tag: creatorName,
        image: '../image/nft-2.png',
        timeLeft: new Date(2023, 10, 1, 18, 0, 0), classProps: 'self-end',id: 6
    },
    ]

    return (<div className=" gap-5 flex justify-between mx-auto flex-col items-center md:items-stretch mb-20" >
        <div className=" h-[auto] mx-auto">
            <img src="../image/bg-cover.png" alt="bg-cover" />
        </div>
        <div className=" w-[100%] md:w-[90%] p-4 mx-auto ">
            <div className=" w-[100%] flex flex-col md:flex-row gap-5 justify-between">
                <div className="left-wing w-[100%] md:w-[70%] flex flex-col gap-5">
                    <h1 className='font-bold text-[51px] leading-[110%]'>{nftName}</h1>
                    <p className="mb-3 text-[#858584] text-[22px]">Minted On {formattedDate}</p>
                    <h1 className='space_mono font-bold text-[22px] text-[#858584]'>Created by</h1>
                    <div className="flex flex-row items-center justify-start gap-2">
                        <img className='w-[44px]' src={`../image/${creatorPic}.png`} alt={creatorPic} />
                        <h1 className='font-semibold text-[22px]'>{creatorName}</h1>
                    </div>
                    <h1 className='space_mono font-bold text-[22px] text-[#858584]'>Description</h1>
                    <p className='font-[400] text-[22px] text-[#fff]'>{nftDesc}</p>

                    <h1 className='space_mono font-bold text-[22px] text-[#858584]'>
                        Details
                    </h1>
                    <a href={`${etherLink}`}>
                        <div className="flex text-[#858584] hover:underline flex-row items-center gap-3"><GiWireframeGlobe fontSize="32px" /> <p>View on Etherscan</p> </div>
                    </a>
                </div>
                <div className='right-wing flex flex-col gap-5 items-center  '>
                    <div className='flex flex-col w-[100%] md:w-[305px] p-5 gap-3 bg-[#160c22] rounded-lg'>
                        <h1>Auction ends in:</h1>
                        <Countdown time={targetTime} />
                        <div className='bg-[#A259FF] py-2 px-7 mx-auto my-2 w-[161px] rounded-lg text-center cursor-pointer hover:bg-[#6528b5]'>
                            Place Bid
                        </div>
                    </div>

                    <div className=" w-[100%] md:w-[295px] h-[284px] rounded-lg min-h-[285px] p-3 justify-end  bg-cover flex flex-col bg-no-repeat gap-2 text-center" style={{ backgroundImage: `url('/image/${nftPic}.png')` }} >
                        <button className=" hover:bg-[#a259ff] transition-all duration-300 text-center shadow-md rounded-lg  gap-1 py-2 px-4 border-[#a259ff] border-[1px]">Check Soulbound Tree</button>
                    </div>

                </div>

            </div>

            <div className='flex flex-col gap-5 w-[100%]'>
                <div className='flex flex-col md:flex-row md:justify-between items-center'>
                    <h1 className='capitalize font-semibold text-[38px] text-[#fff]'>More from this Artist</h1>
                    <button onClick={()=>{history.push('/dashboard')}} className=" hover:bg-[#a259ff]  transition-all duration-300 font-semibold text-center shadow-md rounded-lg  gap-1 py-2 px-4 border-[#a259ff] border-[1px] justify-end self-center">Go to the Artist Page</button>
                </div>

                <div className="grid grid-cols-1 gap-10 justify-between items-center md:grid-cols-3">

                    {
                        nftData.map(item => ((

                            <div className={`${item.classProps}`} key={item.nftPrice + item.id}>
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



        </div>




    </div>);
}

export default NftPreview;