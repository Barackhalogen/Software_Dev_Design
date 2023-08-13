import { useState } from "react";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
const Services = () => {
    const [activeService, setActiveService] = useState();

    const favouriteData = [
        {
            colorCode: '#f0bb1f',
            imgUrl: 'destination',
            title: 'Choose Destination'
            , body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio nemo reiciendis"
        },
        {
            colorCode: '#f15a2b',
            imgUrl: 'avail',
            title: 'Check Availability'
            , body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio nemo reiciendis"
        },
        {
            colorCode: '#006380',
            imgUrl: 'letsgo',
            title: 'Let\'s go'
            , body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio nemo reiciendis"
        }
    ]

    const serviceData = [
        {
            imgUrl: "service-1",
            title: 'Guided Tours',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio nemo'
        },
        {
            imgUrl: "service-2",
            title: 'Best Flights Options',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio nemo'
        },
        {
            imgUrl: "service-3",
            title: 'Religious Tours',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio nemo'
        },
        {
            imgUrl: "service-4",
            title: 'Medical Insurance',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio nemo'
        },
    ]

    return (
        <div className="w-full  lg:w-[90%] md:mx-auto md:mt-40 gap-5 flex justify-between items-center flex-col p-4 text-center">
            <h1 className="text-[#DF6951] text-center uppercase font-bold">Category</h1>
            <h1 className="text-center head font-semibold text-[40px]">We Offer Best Services</h1>
            <div className=" grid grid-cols-2 md:grid-cols-4">
                {
                    serviceData.map(item => ((
                        <div className="flex hover:bg-[#fff] hover:rounded-[36px] transition duration-200 hover:shadow-xl flex-col items-center justify-center relative p-4 gap-3" key={item.title} onMouseEnter={() => { setActiveService(item.imgUrl); }} onMouseLeave={() => { setActiveService('') }}>
                            <img src={`../image/${item.imgUrl}.png`} alt={item.imgUrl} />
                            <h1 className="font-bold">{item.title}</h1>
                            <p className="p-2">{item.body}</p>
                            <div className={`bg-[#DF6951]  h-[100px] flex flex-row items just transition duration-300 w-[100px] absolute -bottom-5 rounded-[36px] -left-5 -z-[10] ${activeService === item.imgUrl ? 'block' : 'hidden'}`} />
                        </div>
                    )))
                }
            </div>
            <div className="flex flex-col md:flex-row w-full md:justify-between gap-5 items-center">
                <motion.div className="w-full md:w-1/2"
                    variants={slideIn('left', 'spring', 0.1, 0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                ><img src="../image/pic-1.png" alt="illustration 1" className="w-full md:w-[80%]" /></motion.div>
                <motion.div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-5"
                    variants={slideIn('right', 'spring', 0.1, 0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h1 className="text-[#DF6951] text-center uppercase font-bold">Honeymoon specials</h1>
                    <h1 className="text-left head font-semibold text-[40px]">Our Romantic Tropical Destinations</h1>
                    <p className="text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi recusandae similique quae unde? Eos aut officiis veritatis odit. Provident vitae earum dolores commodi. Quibusdam, rerum iste maiores necessitatibus sed distinctio.</p>
                    <button className="bg-[#DF6951] text-[#f2f2f2] px-3 py-2 hover:bg-[#c3533c] duration-300 transition rounded-md">View Packages</button>
                </motion.div>
            </div>

            <div className="flex md:flex-row flex-col md:justify-between items-center w-full  ">
                <motion.div className="flex items-start justify-center flex-col w-full md:w-1/2 gap-4"

                    variants={slideIn('left', 'spring', 0.8, 0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h1 className="text-[#DF6951] font-bold">Fast & Easy</h1>
                    <h1 className="text-left head font-semibold text-[40px] capitalize">Get Your favourite resort bookings</h1>
                    <div className="flex flex-col items-start ">
                        {
                            favouriteData.map((item) => ((
                                <div className="flex flex-row gap-3 items-center md:w-[90%] w-full" key={item.title} >
                                    <div style={{ backgroundColor: item.colorCode }} className={` text-[#fff] py-3 px-2 rounded-xl w-[10%]`}>
                                        <img className="mx-auto" src={`../image/${item.imgUrl}.svg`} alt={item.imgUrl} />
                                    </div>
                                    <div className="flex flex-col items-start text-left gap-1">
                                        <h1 className="font-bold" >{item.title} </h1>
                                        <p className="w-full md:w-[70%]">{item.body}</p>
                                    </div>
                                </div>
                            )))
                        }
                    </div>
                </motion.div>


                <motion.div className="w-full md:w-1/2"
                     variants={slideIn('right', 'spring', 0.4, 0.4)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                >
                    <img src="../image/pic-2.png" alt="pic 2" className="w-full md:w-[100%]" />
                </motion.div>

            </div>

        </div>
    );
}

export default Services;