const http = require('./../../config/http');
const ProductService = require('./../services/ProductService');

class ProductController {

    async getProductRecommend (req, res) {
        try {

            let result = await ProductService.getProductRecommend();

            res.status(http.HTTP_SUCCESS_CODE).send({
                "statusCode": http.HTTP_SUCCESS_CODE,
                "statusMessage": http.HTTP_SUCCESS_MSG,
                "data" : result
            });

        } catch (error) {
            res.status(http.HTTP_INTERNAL_SERVER_CODE).send({
                "statusCode": http.HTTP_INTERNAL_SERVER_CODE,
                "statusMessage": http.HTTP_INTERNAL_SERVER_MSG,
                "error" : error
            });
        }
    }

    async getAllProductByCategoryId (req, res) {

        try {

            const { categoryType } = req.params;

            if (!categoryType || !(typeof(categoryType) != String)) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_PRODUCT_CATEGORY_INVALID
                });
            }
    
            let result = await ProductService.getAllProductByCategoryId(categoryType);
    
            res.status(http.HTTP_SUCCESS_CODE).send({
                "statusCode": http.HTTP_SUCCESS_CODE,
                "statusMessage": http.HTTP_SUCCESS_MSG,
                "data": result
            });

        } catch (error) {
            res.status(http.HTTP_INTERNAL_SERVER_CODE).send({
                "statusCode": http.HTTP_INTERNAL_SERVER_CODE,
                "statusMessage": http.HTTP_INTERNAL_SERVER_MSG,
                "error" : error
            });
        }

        
    }

    async getProductDetailsById(req, res) {
        try {
            const { productId } = req.params;

            if (!productId || !(typeof(productId) != String)) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_PRODUCT_IDENTIFIER_INVALID
                });
            }
    
            let result = await ProductService.getProductDetailsById(productId);

            if (result.statusCode) {
                res.status(result.statusCode).json(result);
            }
    
            res.status(http.HTTP_SUCCESS_CODE).send({
                "statusCode": http.HTTP_SUCCESS_CODE,
                "statusMessage": http.HTTP_SUCCESS_MSG,
                "data" : result
            });

        } catch (error) {
            res.status(http.HTTP_INTERNAL_SERVER_CODE).send({
                "statusCode": http.HTTP_INTERNAL_SERVER_CODE,
                "statusMessage": http.HTTP_INTERNAL_SERVER_MSG,
                "error" : error
            });
        }
    }

    async searchProductByName(req, res) {
        try {
            const { name } = req.query;

            if (!productId || !(typeof(productId) != String)) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_PRODUCT_IDENTIFIER_INVALID
                });
            }

            let result = await ProductService.searchProductByName(name);
    
            res.status(http.HTTP_SUCCESS_CODE).send({
                "statusCode": http.HTTP_SUCCESS_CODE,
                "statusMessage": http.HTTP_SUCCESS_MSG,
                "data": result
            });

        } catch (error) {
            res.status(http.HTTP_INTERNAL_SERVER_CODE).send({
                "statusCode": http.HTTP_INTERNAL_SERVER_CODE,
                "statusMessage": http.HTTP_INTERNAL_SERVER_MSG,
                "error" : error
            });
        } 
    }

}

module.exports = new ProductController();