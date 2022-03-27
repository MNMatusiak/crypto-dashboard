import React, {useEffect,useState} from "react";
import './CryptoList.css';
import ExchangeRateDisplay from "./ExchangeRateDisplay";
import axios from "axios";

const ExchangeRates = () => {

    const currencies = ['BTC', 'ETH', 'BCH', 'XRP', 'LINK', 'DOT'];
    const [chosenPrimaryCurrency,setChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency,setChosenSecondaryCurrency] = useState('ETH');
    const [amount,setAmount] = useState(1)
    const [exchangeRate,setExchangeRate] = useState(0)
    const [result, setResult] = useState(0);

    const convert = () => {

        const options = {
            method: 'GET',
            url:'https://api.coingecko.com/api/v3/exchange_rates',
        }

        axios.request(options).then((response) => {
            console.log(response.data);
            setExchangeRate(4.5);
            setResult(exchangeRate * amount);
        }).catch((error) => {
            console.log(error);
        })

        console.log(exchangeRate);
        console.log(result);
    }

    return (
        <div className='page-main'>
            <div className='exchange-rate-main'>
                <h2>Crypto Exchange Converter</h2>

                <div className="input-box">

                    <table>
                        <tbody>
                        <tr>
                            <td>Amount of BTC selling:</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-1"
                                    value={amount}
                                    onChange={((e) => setAmount(e.target.value))}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenPrimaryCurrency}
                                    name="currency-option-1"
                                    className="currency-options"
                                    onChange={((e) => setChosenPrimaryCurrency(e.target.value))}
                                >
                                    <option>BTC</option>))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Amount of Crypto buying:</td>
                            <td>
                                <input
                                    name="currency-amount-2"
                                    value={result}
                                    disabled={true}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenSecondaryCurrency}
                                    name="currency-option-2"
                                    className="currency-options"
                                    onChange={((e) => setChosenSecondaryCurrency(e.target.value))}

                                >
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <button id="convert-button" onClick={convert}>Convert</button>

                </div>

                <ExchangeRateDisplay
                  exchangeRate={exchangeRate}
                  chosenPrimaryCurrency={chosenPrimaryCurrency}
                  chosenSecondaryCurrency = {chosenSecondaryCurrency}
                />
            </div>
        </div>
    )
}

export default ExchangeRates;