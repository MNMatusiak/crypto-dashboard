import './ExchangeRateDisplay.css';

const ExchangeRateDisplay = ({exchangeRate,chosenPrimaryCurrency,chosenSecondaryCurrency}) => {
    return (
        <div className='page-main'>
            <div className='exchange-rate-display'>
                <h3>Exchange rate:</h3>
                <h1>{exchangeRate}</h1>
                <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
            </div>
        </div>
    )
}

export default ExchangeRateDisplay;