const express = require('express')
const app = express();
const itemRoutes = require('./routes/items')
const ExpressErorr = require('./expressErorr')

app.use(express.json());
app.use('/items', itemRoutes);

app.use(function(req, res, next) {
    return new ExpressErorr('Not Found', 404);
});

app.use((req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});