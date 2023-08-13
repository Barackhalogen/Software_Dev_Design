import OpenArt from "../components/OpenArt";

const ConnectWallet = () => {

    const walletsData = [
        {
            title: 'Metamask',
            imgUrl: 'Metamask',
            body: 'Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.',
            add: 'Most Popular'
        },
        {
            title: 'Bitski',
            imgUrl: 'Bitski',
            body: 'Bitski connects communities, creators and brands through unique, ownable digital content.'
        },
        {
            title: 'Fortmatic',
            imgUrl: 'Fortmatic',
            body: 'Let users access your Ethereum app from anywhere. No more browser extensions.'
        },
        {
            title: 'Wallet Connect',
            imgUrl: 'walletconnect',
            body: 'Open source protocol for connecting decentralised applications to mobile wallets.'
        },
        {
            title: 'Coinbase',
            imgUrl: 'Coinbase',
            body: "The easiest and most secure crypto wallet. No Coinbase account required."
            
        },
        {
            title: 'Arkane',
            imgUrl: 'Arkane',
            body: 'Make it easy to create blockchain applications with secure wallets solutions.'
        },
        {
            title: 'Authereum',
            imgUrl: 'Authereum',
            body: 'Your wallet where you want it. Log into your favorite dapps with Authereum.'
        },
        {
            title: 'Torus',
            imgUrl: 'Torus',
            body: 'Open source protocol for connecting decentralised applications to mobile wallets.'
        },
        
    ]

    return (
        <div className="w-[100%] lg:w-[90%] md:mx-auto gap-5 flex justify-between  flex-col p-4 items-center md:items-stretch mb-20">
            <OpenArt imgUrl="openart-2" text="Wallet" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {
                    walletsData.map(item=>((
                        <div key={item.title} className="flex cursor-pointer rounded-lg w-[100%]  p-5 bg-[#070509] flex-col gap-3 items-start" >
                            <div className="flex flex-row gap-5">
                                <img src={`../image/${item.imgUrl}.png`} alt={item.imgUrl} />
                                {item.add && <h1 className="bg-[#201e22] font-bold py-1 px-2 rounded-lg" style={{ alignSelf: "flex-start" }} >Most Popular</h1>}
                            </div>
                            <h1 className="font-bold text-[16px] text-[#fff]">{item.title}</h1>
                            <p className="text-[#68676E] text-[14px] font-bold">{item.body}</p>
                        </div>
                    )))
                }

            </div>
        </div>
    );
}

export default ConnectWallet;