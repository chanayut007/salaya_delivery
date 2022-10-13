const ProductRepository = require('./../repository/ProductRepository');
const config = require('./../../config/config');
const http = require('./../../config/http');
const e = require('express');

class ProductService {

    async getProductRecommend () {
        try {

            let products = await ProductRepository.getProductRecommend();

            let result = [];

            for (var product of products) {
                let item = {
                    "productId": product.productId,
                    "productName": product.productName,
                    "images": `${config.endpointImageUrl}/${product.images}`,
                    "pricePerUnit": product.pricePerUnit
                };

                result.push(item);
            }
            return result;

        } catch (error) {
            throw error;
        }
    }

    async getAllProductByCategoryId (categoryType) {
        try {

            let products = null;

            if (categoryType.includes("all")) {
                products = await ProductRepository.getAllProduct();
            } else {
                products = await ProductRepository.getAllProductByCategoryId(categoryType.toString());
            }

            let result = [];

            for (var product of products) {
                let item = {
                    "productId": product.productId,
                    "productName": product.productName,
                    "images": `${config.endpointImageUrl}/${product.images}`,
                    "pricePerUnit": product.pricePerUnit
                };

                result.push(item);
            }
            return result;

        } catch (error) {
            throw error;
        }
    }

    async getProductDetailsById(productId) {
        try {

            let data = await ProductRepository.getProductDetailsById(productId);

            if (data.length == 0) {
                return {
                    statusCode: http.HTTP_CLIENT_ERROR_CODE,
                    statusMessage: http.HTTP_PRODUCT_BY_ID_NOT_DATA
                };
            } else {
                let result = {
                    "productId": data[0].productId,
                    "productName": data[0].productName,
                    "details": data[0].details,
                    "images": `${config.endpointImageUrl}/${data[0].images}`,
                    "pricePerUnit": data[0].pricePerUnit
                };
    
                return result;
            }

        } catch (error) {
            throw error;
        }
    }

    async searchProductByName(keyword) {
        try {

            let result = await ProductRepository.getProductByName(keyword);

            return result;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = new ProductService();