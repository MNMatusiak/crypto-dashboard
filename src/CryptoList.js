// import React from "react";
// import './CryptoList.css';
//
// const CryptoList = ({name, price, image, symbol}) => {
//     return (
//
//         <div className='coin-container'>
//             <div className='coin-row'>
//                 <div className='coin'>
//                     <img src={image} alt='crypto'/>
//                     <h1>{name}</h1>
//                     <p className='coin-symbol'>{symbol}</p>
//                 </div>
//                 <div className='coin-data'>
//                     <p className='coin-price'>${price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default CryptoList;


import React, {useState, useEffect} from "react";
import './CryptoList.css';
import axios from "axios";


const CryptoList = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log("Issue connecting with API"));
    }, []);

    return (
        <>

            {coins.map(coin => {
                return (

                    <div key={coin.id} className='coin-container'>
                        <div className='coin-row' >
                            <div className='coin'>
                                <img src={coin.image} alt='crypto'/>
                                <h1>{coin.name}</h1>
                                <p className='coin-symbol'>{coin.symbol}</p>
                            </div>
                            <div className='coin-data'>
                                <p className='coin-price'>${coin.current_price}</p>
                            </div>
                        </div>
                    </div>

                );
            })}

        </>


    )
}

export default CryptoList;