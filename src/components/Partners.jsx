import { useEffect, useState } from "react";

const Partners = () => {
    const [imgData, setImgData] = useState([]);
    const generateImage = () => {
        const pushData = [];
        for (var i = 1; i <= 4; i++){
            pushData.push(`partner-${i}`)
        };
        setImgData(pushData);
    }
    useEffect (()=>{
        generateImage();
    }, [])


    return (<div className="w-full bg-[#F7F7F7] text-[#868686] py-2 md:py-6 ">
        <div className=" lg:w-[90%] md:mx-auto px-5  gap-5 grid grid-cols-2 md:flex md:justify-between items-center justify-center md:flex-row py-5">
           {imgData.map(item=>((
            <div><img className="h-[35px]" src={`../image/${item}.png`} alt={item} /></div>
           )))}
        </div>
   
    </div>);
}

export default Partners;