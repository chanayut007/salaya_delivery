const express = require('express');
const config = require('./src/config/config');
const http = require('./src/config/http');
const { categoryRouter, checkoutRouter, productRouter, branchRouter } = require("./src/v1/routes/routes");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const ports = config.port;

app.get("/", (req, res) => {
    res.status(http.HTTP_SUCCESS_CODE).send({
        "statusCode": http.HTTP_SUCCESS_CODE,
        "statusMessage": http.HTTP_SUCCESS_MSG
    });
});

app.use("/branch", branchRouter);

app.use("/category", categoryRouter);

app.use("/checkout", checkoutRouter);

app.use("/products", productRouter);

app.use((req, res, next) => {
    res.status(http.HTTP_NOT_FOUND_CODE).send({
        "statusCode": http.HTTP_NOT_FOUND_CODE,
        "statusMessage": http.HTTP_NOT_FOUNT_MESSAGE
    });
});

app.listen(ports, ()=> console.log(`Server is running on port ${ports}`));

module.exports = app;
