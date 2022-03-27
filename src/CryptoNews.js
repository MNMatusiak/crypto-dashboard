import React, {useEffect, useState} from "react";
import './CryptoNews.css';
import axios from "axios";

const CryptoNews = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/exchange_rates'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log("Issue connecting with API"));
    }, []);

    return (
            <div className='page-main'>
               CryptoNews
            </div>
    )
}

export default CryptoNews;