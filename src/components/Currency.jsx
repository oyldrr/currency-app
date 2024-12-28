import React, { useState } from 'react'
import axios from 'axios';

/* Custom CSS */
import '../css/currency.css'

/* React Icons */
import { FaArrowRight, FaArrowDown } from "react-icons/fa";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_h6SgKndVb1pfl0x5ZLbpccKAGDPT316LFkSdaOds";

function Currency() {

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        // console.log(amount, fromCurrency, targetCurrency, result);
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const exchange_rate = response.data.data[targetCurrency];
        setResult((amount * exchange_rate).toFixed(2));
    }

    return (
        <div className='currency-container'>
            <h1 className='currency-h1'>Exchange Application</h1>
            <div className="inner-container">

                <input type="number" className="amount" min={0}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />

                <select className='from-currency'
                    onChange={(e) => setFromCurrency(e.target.value)} >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="JPY">JPY</option>
                    <option value="BGN">BGN</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="GBP">GBP</option>
                    <option value="HUF">HUF</option>
                    <option value="PLN">PLN</option>
                    <option value="RON">RON</option>
                    <option value="SEK">SEK</option>
                    <option value="NOK">NOK</option>
                    <option value="CHF">CHF</option>
                    <option value="RUB">RUB</option>
                    <option value="TRY">TRY</option>
                </select>

                <FaArrowRight className='arrow-right' />
                <FaArrowDown className='arrow-down' />

                <select className='target-currency'
                    onChange={(e) => setTargetCurrency(e.target.value)} >
                    <option value="TRY">TRY</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="JPY">JPY</option>
                    <option value="BGN">BGN</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="GBP">GBP</option>
                    <option value="HUF">HUF</option>
                    <option value="PLN">PLN</option>
                    <option value="RON">RON</option>
                    <option value="SEK">SEK</option>
                    <option value="NOK">NOK</option>
                    <option value="CHF">CHF</option>
                    <option value="RUB">RUB</option>
                </select>

                <input type="number" className='result' min={0}
                    value={result}
                    onChange={(e) => setResult(e.target.value)} />
            </div>
            <button className='exchange-button' onClick={exchange}>Exchange</button>
        </div>
    )
}

export default Currency
