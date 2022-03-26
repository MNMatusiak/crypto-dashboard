import React, {useState, useEffect} from "react";
import axios from "axios";
import Nav from "./Nav";
import CryptoList from "./CryptoList";
import ExchangeRates from "./ExchangeRates";
import CryptoNews from "./CryptoNews";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

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
            <Router>
                <Nav/>
                <Route path="/cryptoList" component={CryptoList}/>
                <Route path="/exchangerates" component={ExchangeRates}/>
                <Route path="/cryptonews" component={CryptoNews}/>

                <div className='crypto-app'>

                    {coins.map(coin => {
                        return (
                            <CryptoList key={coin.id} name={coin.name} price={coin.current_price} image={coin.image}
                                        symbol={coin.symbol}/>
                        );
                    })}
                </div>

            </Router>
        </>

    );
}

export default App;
