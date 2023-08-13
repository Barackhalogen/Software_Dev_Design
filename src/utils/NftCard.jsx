import { FaEthereum } from 'react-icons/fa'
import TimeFunc from './TimeFunc';
const NftCard = ({ nftPrice, nftName, owner_tag, image, targetTime }) => {
  
    const [hours, minutes, seconds] = TimeFunc(targetTime);

    return (
        <div className="w-[380px] flex flex-col glass_morphism justify-center h-[516px] p-5 border-[#b23fff65] border-2">
            <div className="justify-between flex mb-2">
                <h1 className='font-bold text-[20px]'>{nftName}</h1>
                <p className='text-[16px]'>{owner_tag}</p>
            </div>
            <img className='rounded-sm h-[318px] w-[auto]' src={`${image}`} alt={image} />
            <div className="grid mt-2 grid-cols-2 justify-between">
                <p>Current Bid</p>
                <p className='text-right'>Time Remaining</p>
                <div className='flex flex-row items-center'>
                    <FaEthereum color="#B33FFF" /> <h1 className='font-bold text-[#09D3FF]'>{nftPrice}</h1>
                </div>
                <h1 className='font-bold text-[#09D3FF] text-right'>
                    {hours}h:{minutes<10?'0':''}{minutes}m:{seconds<10?'0':''}{seconds}s
                </h1>
            </div>
        </div>
    );
}

export default NftCard;
