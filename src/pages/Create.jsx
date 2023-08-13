import OpenArt from "../components/OpenArt";
import { BsTag } from 'react-icons/bs';
import { GiSandsOfTime } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import NftCard from "../utils/NftCard";
import { useState } from "react";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';


const Create = () => {
    const inputStyles = 'w-[100%] max-h-[51px] border-[0.5px] bg-[#000] text-[#fff] placeholder:text-[#68676e] placeholder:text-[#18px] placeholder:font-bold p-2 rounded-lg';

    const handleDownload = () => {
        html2canvas(document.querySelector('.right-wing')).then((canvas) => {
            canvas.toBlob((blob) => {
                saveAs(blob, 'right-wing.png');
            });
        });
    };

    const methodsData = [
        {
            id: 1, icon: <BsTag />, text: 'Fixed Price'
        },
        {
            id: 2, icon: <GiSandsOfTime />, text: 'Timed auction'
        },
        {
            id: 3, icon: <IoIosPeople />, text: 'Open for bids'
        },

    ]

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [formData, setFormData] = useState({
        price: '',
        collection: '1',
        title: '',
        description: '',
        royalties: '',
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="w-[100%] lg:w-[90%] md:mx-auto gap-5 flex justify-between  flex-col p-4 items-center md:items-stretch mb-20">
            <OpenArt text="Create" imgUrl="openart-2" />
            <div className="flex flex-col md:flex-row gap-3 items-start justify-between">
                <div className="w-[100%] md:w-[70%] gap-5 flex-col flex">
                    <div className="flex flex-col gap-5 items-start justify-start">
                        <h1 className="font-bold text-[18px]">Upload file</h1>
                        <div className="flex flex-col items-center justify-center border-dashed border-[3px] border-[#68676E] rounded-[25px] w-[100%] md:w-[732px] h-[232px] ">
                            <h1>PNG, JPG, GIF, WEBP or MP4, Max 200mb.</h1>
                            <label htmlFor="fileInput" className="bg-[#A259FF] py-2 px-7 mx-auto my-10 w-[161px] rounded-lg text-center cursor-pointer hover:bg-[#6528b5]">
                                Browse
                                <input id="fileInput" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                            </label>

                        </div>

                    </div>

                    <div className="flex flex-col items-start justify-start gap-5">
                        <h1 className="font-bold text-[18px]" >Select Method</h1>
                        <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                            {methodsData.map(item => ((
                                <div key={item.id} className="cursor-pointer w-[170px] h-[170px] border-solid rounded-[12px] border-[#eeeeee] border-[0.5px] flex flex-col items-center justify-center gap-3 hover:border-[#552f85] hover:text-[#552f85] ">
                                    <div className="text-[32px]">{item.icon}</div>
                                    <p className="">{item.text}</p>
                                </div>
                            )))}

                        </div>

                    </div>

                    <div className="flex flex-col items-start justify-start gap-5">
                        <h1 className="font-bold ">Price</h1>
                        <input type="text" name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className={`${inputStyles}`}
                            placeholder="Enter price for one item (ETH)"
                        />

                        <h1 className="font-bold">Choose collection</h1>
                        <h1 className="font-bold text-[#eeeeee]">Unlock content after successful transcation.</h1>
                        <select name="collection"
                            value={formData.collection}
                            onChange={handleChange}
                            className={`${inputStyles}`}
                            id="collection">
                            <option value="1">Sellect Collection</option>
                            <option value="2">Collection 1</option>
                            <option value="3">Collection 2</option>
                        </select>

                        <h1>Title</h1>
                        <input type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`${inputStyles}`}
                            placeholder="e.g: Crypto Funk" />

                        <h1>Description</h1>
                        <input type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={`${inputStyles}`}
                            placeholder="e.g: This is a very limited item" />

                        <h1>Royalties</h1>
                        <input type="text"
                            name="royalties"
                            value={formData.royalties}
                            onChange={handleChange}
                            className={`${inputStyles}`}
                            placeholder="suggested: 0, 10%, 20%, 30%, Maximum is 70%" />


                        <div className='bg-[#A259FF] py-2 px-7 my-10 w-[161px] rounded-lg text-center cursor-pointer hover:bg-[#6528b5] '>
                            Create item
                        </div>
                    </div>

                </div>

                <div className="">
                    <div className="right-wing" onClick={handleDownload}>
                        <NftCard
                            nftPrice={formData.price}
                            nftName={formData.title}
                            owner_tag={formData.royalties}
                            image={selectedFile && URL.createObjectURL(selectedFile)}
                            timeLeft='24hr:00min:00s'
                        />
                </div>
                        {/* <div className='bg-[#A259FF] py-2 px-7 my-10 w-[100%] rounded-lg text-center cursor-pointer hover:bg-[#6528b5] ' onClick={handleDownload}>
                            Download as Image
                        </div> */}
                </div>


            </div>


        </div>
    );
}

export default Create;