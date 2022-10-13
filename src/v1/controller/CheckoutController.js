const CheckoutService = require('../services/CheckoutService');
const http = require('./../../config/http');

class CheckoutController {

    async checkout(req, res) {

        try {

            if (!req.body.customerName) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_CHECKOUT_CUSTOMER_NAME_INVALID
                });
            } else if (!req.body.customerPhone) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_CHECKOUT_CUSTOMER_PHONE_INVALID
                });
            } else if (!req.body.address) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_CHECKOUT_ADDRESS_INVALID
                });
            } else if (!req.body.shipTo) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_CHECKOUT_SHIP_TO_INVALID
                });
            } else if (!req.body.items) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_CHECKOUT_ITEM_INVALID
                });
            }
    
            let result = await CheckoutService.checkout(req.body);
    
            res.status(http.HTTP_UPDATE_SUCCESS_CODE).send({
                "statusCode": http.HTTP_UPDATE_SUCCESS_CODE,
                "statusMessage": http.HTTP_UPDATE_SUCCESS_MSG,
            });

        } catch (error) {
            res.status(http.HTTP_INTERNAL_SERVER_CODE).send({
                "statusCode": http.HTTP_INTERNAL_SERVER_MSG,
                "statusMessage": http.HTTP_INTERNAL_SERVER_MSG,
                "error": error
            });
        }
    }

}

module.exports = new CheckoutController();