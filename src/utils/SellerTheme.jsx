const SellerTheme = ({ userName, sellPrice, imgUrl, userOnline }) => {
    return (
        <div className="flex flex-row gap-3 items-center justify-center">
            <div className="flex items-center relative justify-center w-[60px] h-[60px] border-[3px] border-solid border-[#141414] rounded-[30px]"> <img src={`../image/${imgUrl}.png`} alt={imgUrl} />
                {userOnline && <div className="absolute -top-1 -right-1 w-[20px] h-[20px] bg-[#00a3ff] rounded-[10px]"></div>}
            </div>
            <div className="flex flex-col items-start justify-between">
                <h1 className="text-[17px] sm:text-[20px] text-[#fff] font-semibold">{userName}</h1>
                <p className="text-[14px] text-[#acacac]">{sellPrice}</p>
            </div>
        </div>

    );
}
export default SellerTheme;