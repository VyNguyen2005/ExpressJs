

const express = require(`express`);
const app = express();
// options: `tiny`, `short`, `dev`, `combined`
const morgan = require(`morgan`);

// req => middleware => res

const logger = require(`./logger`);
const authorize = require(`./authorize`);

// app.use([logger, authorize]);
app.use(morgan(`tiny`));

app.get(`/`, (req, res) => {
    res.send(`Home`);
});
app.get(`/about`, (req, res) => {
    res.send(`About`);
});
app.get(`/api/products`, (req, res) => {
    res.send(`Products`);
});
app.get(`/api/items`, /*[logger, authorize], */ (req, res) => {
    res.send(`Items`);
});

app.listen(5001, () => {
    console.log(`Server is listening on port 5000....`);
});