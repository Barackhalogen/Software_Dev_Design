const roundedBoxClass = "rounded-[10px] w-[86px] h-[66px]";

const TopCat = ({ firstImg, secondImg, thirdImg, mainNft, person, nftCategorie, itemsLeft }) => {
    return (
        <div className="w-[284px] relative h-[321px] rounded-[8px] flex gap-1 flex-col items-center justify-center bg-[#140c20]
        
        
        ">
            <div className="w-[257px] h-[173.4px]">
                <img src={`../image/${mainNft}.png`} alt="" />
            </div>
            <div className="w-[76px] absolute bg-cover flex items-center justify-center z-20 left-[36.6%] bottom-[90px] h-[76px] rounded-[40px] border-[5px] border-solid border-[#212E48]">
                <img src={`../image/${person}.png`} alt="" />
            </div>
            <div className="grid grid-cols-3 items-center justify-center">
                <div className={roundedBoxClass}>
                    <img src={`../image/${firstImg}.png`} alt={firstImg} />
                </div>
                <div className={roundedBoxClass}>
                    <img src={`../image/${secondImg}.png`} alt={secondImg} />
                </div>
                <div className={roundedBoxClass}>
                    <img src={`../image/${thirdImg}.png`} alt={thirdImg} />
                </div>
            </div>
            <div className="flex gap-20 my-2 flex-row items-center justify-between">
                <h1 className="text-[#fff] text-[20px]">{nftCategorie}</h1>
           
                <p className="bg-[#212E48] hover:bg-[#3B4E75] cursor-pointer p-1 rounded-[3px]">{itemsLeft}</p>
            </div>
        </div>
    );
};

export default TopCat;
