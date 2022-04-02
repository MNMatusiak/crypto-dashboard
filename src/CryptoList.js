import React, {useState, useEffect} from "react";
import './CryptoList.css';
import axios from "axios";


const CryptoList = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log("Issue connecting with API"));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <>
            <div className='page-main'>

                <div className='coin-search'>
                    <h1 className='coin-text'>Search Crypto Currency</h1>
                    <form>
                        <input
                            className='coin-input'
                            type='text'
                            onChange={handleChange}
                            placeholder='Search'
                        />
                    </form>
                </div>


            {filteredCoins.map(coin => {
                return (
                    <div key={coin.id} className='coin-container'>
                        <div className='coin-row'>
                            <div className='coin'>
                                <img src={coin.image} alt='crypto'/>
                                <h1>{coin.name}</h1>
                                <p className='coin-symbol'>{coin.symbol}</p>
                            </div>
                            <div className='coin-data'>
                                <p className='coin-price'>${coin.current_price}</p>
                                {/*<p className='coin-volume'>${coin.market_cap.toLocaleString()}</p>*/}

                                {coin.price_change_percentage_24h < 0 ? (
                                    <p className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                    <p className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                )}

                                <p className='coin-marketcap'>
                                    Mkt Cap: ${coin.total_volume.toLocaleString()}
                                </p>

                            </div>
                        </div>
                    </div>

                );
            })}
            </div>
        </>
    )
}

export default CryptoList;