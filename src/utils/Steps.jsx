const StepsUtil = ({imgUrl, step, title, body}) => {
    return ( 
        <div className="flex mt-5 flex-col w-full md:w-[295px] h-[228px] rounded-[12px]  bg-[#0D0D13] items-start justify-between p-5 relative">
            <div className="right-2 -top-8 absolute"><img src={`../image/${imgUrl}.png`} alt={imgUrl} /></div>
            <p className="text-[15px] text-[#ACACAC]">{step}</p>
            <h1 className="font-semibold text-[22px] text-[#fff] ">{title}</h1>
            <p className="text-[1rem] text-[#acacac]">{body}</p>
        </div>
     );
}
 
export default StepsUtil;