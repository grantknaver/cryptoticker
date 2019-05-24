const ccxt = require('ccxt'), 
fetch = require('node-fetch'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
compression = require('compression'),
app = express();

app.use(compression())
    .use(bodyParser.json())
    .use(express.static(__dirname + '/dist'));

// Middleware
app.use(cors());

// Updates: 
// 1. Use Cron (Bookmarked) more dynamic info updates

const endPoint = 'http://api.binance.com/api/v3/ticker/price?symbol=';
const coins = [
    { ticker: 'ETHBTC', symbol : 'ETHBTC', logo: './assets/ethLogo.png', price: 0 },
    { ticker: 'BCHSVBTC', symbol: 'BCHSVBTC', logo: './assets/btcSVLogo.png', price: 0 },
    { ticker: 'XRPBTC', symbol: 'XRPBTC', logo: './assets/rippleLogo.png', price: 0},
    // { ticker: 'TUSDBTC', symbol: 'TUSDBTC', logo: './assets/trueUsdLogo.png', price: 0 },
    { ticker: 'XLMBTC', symbol: 'XLMBTC', logo: './assets/stellarLogo.png', price: 0 },
    // { ticker: 'WAVESBTC', symbol: 'WAVEBTC', logo: './assets/wavesLogo.jpeg', price: 0},
    { ticker: 'ADABTC', symbol: 'ADABTC', logo: './assets/cardanoLogo.png', price: 0}
    // { ticker: 'ARNBTC', symbol: 'ARNBTC', logo: './assets/aeronLogo.png', price: 0},
    // { ticker: 'ZECBTC', symbol: 'ZECBTC', logo: './assets/zCashLogo.png', price: 0},
    // { ticker: 'VIBEBTC', symbol: 'VIBEBTC', logo: './assets/vibeLogo.jpg', price: 0}
];

app.get('/get-info', (req, res) => {
    const arrayOfPromises = coins.map(c => fetch(`http://api.binance.com/api/v3/ticker/price?symbol=${c.ticker}`).then(res => res.json()));
    Promise.all(arrayOfPromises)
    .then(allRes => {
        const newVals = allRes.map((c, i) => {
            coins[i].price = c.price;
            return coins[i];
        });
        res.send(newVals);
    }).catch(allErr => releaseEvents.send(err));
});

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listenting on port ${port}`);
});


