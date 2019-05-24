const html_ = __dirname;

// Express
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression())
    .use(bodyParser.json())
    .use('/', express.static(html_));

let port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`listenting on port ${port}`);
});

