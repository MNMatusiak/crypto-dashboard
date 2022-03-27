import Nav from "./Nav";
import CryptoList from "./CryptoList";
import ExchangeRates from "./ExchangeRates";
import CryptoNews from "./CryptoNews";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

    return (
        <>
            <Router>
                <Nav/>
                <Switch>
                <Route path="/" exact component={CryptoList}/>
                <Route path="/cryptoList" component={CryptoList}/>
                <Route path="/exchangerates" component={ExchangeRates}/>
                <Route path="/cryptonews" component={CryptoNews}/>
                </Switch>
            </Router>
        </>

    );
}

export default App;
