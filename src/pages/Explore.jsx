import OpenArt from "../components/OpenArt";
import { BiSearch } from 'react-icons/bi'
import TopCat from "../utils/TopCat";
import Button from "../utils/Button";

const Explore = () => {

    const topCatData = [
        {
            id: 1,
            firstImg: 'nft-sm-1', secondImg: 'nft-sm-2', thirdImg: 'nft-sm-3', mainNft: 'coll-1', person: 'person-1', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 2,
            firstImg: 'nft-sm-4', secondImg: 'nft-sm-5', thirdImg: 'nft-sm-6', mainNft: 'coll-2', person: 'person-2', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 3,
            firstImg: 'nft-sm-7', secondImg: 'nft-sm-8', thirdImg: 'nft-sm-9', mainNft: 'coll-3', person: 'person-3', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 4,
            firstImg: 'nft-sm-10', secondImg: 'nft-sm-11', thirdImg: 'nft-sm-12', mainNft: 'coll-4', person: 'person-4', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 5,
            firstImg: 'nft-sm-7', secondImg: 'nft-sm-8', thirdImg: 'nft-sm-9', mainNft: 'coll-3', person: 'person-5', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 6,
            firstImg: 'nft-sm-10', secondImg: 'nft-sm-11', thirdImg: 'nft-sm-12', mainNft: 'coll-4', person: 'person-6', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 7,
            firstImg: 'nft-sm-7', secondImg: 'nft-sm-8', thirdImg: 'nft-sm-9', mainNft: 'coll-3', person: 'person-7', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        },
        {
            id: 8,
            firstImg: 'nft-sm-10', secondImg: 'nft-sm-11', thirdImg: 'nft-sm-12', mainNft: 'coll-4', person: 'person-8', nftCategorie: "Cubic Trad",
            itemsLeft: '27 Items'
        }
    ]






    return (


        <div className="w-[100%] lg:w-[90%] md:mx-auto gap-5 flex justify-between  flex-col p-4 items-center md:items-stretch mb-20">
            <OpenArt
                imgUrl='openart-1'
                text="Explore"
            />

            <div className="flex flex-col md:flex-row gap-5 w-[100%] lg:w-[913px] items-center justify-between mb-10">

                <div className="flex w-[297px] flex-row justify-end gap-4 items-center border-[#EEEEEE] border-[0.5px] rounded-lg pl-5"><input className=" placeholder:text-[#14px] search-input" type="text" placeholder="Search item here..." />
                    <div className="w-[75px] h-[51px] flex flex-row items-center justify-center bg-[#ff343f] rounded-lg">
                        <BiSearch color="#A3B2C8" fontSize='24px' />
                    </div>
                </div>
                <select id="categorie" className="bg-[#000] align-middle font-bold rounded-lg text-[#fff] items-center justify-center border-[1px] border-[#eeeeee] w-[182px] h-[51px] px-3">
                    <option value="">All categories</option>
                </select>
                <select id="BuyNow" className="bg-[#000] align-middle font-bold rounded-lg text-[#fff] items-center justify-center border-[1px] border-[#eeeeee] w-[182px] h-[51px] px-3">
                    <option value="">Buy Now</option>
                </select>
                <select id="AllItems" className="bg-[#000] align-middle font-bold rounded-lg text-[#fff] items-center justify-center border-[1px] border-[#eeeeee] w-[182px] h-[51px] px-3">
                    <option value="">All</option>
                </select>
            </div>

            <div className="sm:grid overflow-x-scroll md:overflow-hidden whitespace-nowrap gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-items-between w-full sm:w-full">

                {topCatData.map(item => ((
                    <div key={item.id} className="sm:flex  inline-block mr-5 sm:mr-0 justify-center sm:justify-between" >
                        <TopCat

                            firstImg={item.firstImg}
                            secondImg={item.secondImg}
                            mainNft={item.mainNft}
                            thirdImg={item.thirdImg}
                            person={item.person}
                            nftCategorie={item.nftCategorie}
                            itemsLeft={item.itemsLeft}
                        />
                    </div>
                )))}

            </div>

            <div className='bg-[#A259FF] py-2 px-7 mx-auto my-10 w-[161px] rounded-lg text-center cursor-pointer hover:bg-[#6528b5]'>
                Load More
            </div>

                    <hr className="w-[100%]"/>

        </div>
    );
}

export default Explore;