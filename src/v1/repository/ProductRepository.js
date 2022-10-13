const http = require('../../config/http');
const MySqlConnection = require('./../../connections/MySQLConnection');

class ProductRepository {

    async getProductRecommend() {
        try {
            let connection = await MySqlConnection.connect();
            return await new Promise((resolve, reject) => {
                connection.query(`SELECT 
                productTable.product_id as productId,
                productTable.product_name as productName,
                productTable.images as images,
                productTable.price_per_unit as pricePerUnit
                FROM salaya_delivery.product as productTable WHERE productTable.is_recommend = 1;`, 
                [],
                (err, result) => {
                    connection.release();
                    if (err) reject(err);
                    resolve(result);
                });
            });
            
        } catch (error) {
            console.log('ProductRepository.getProductRecommend() Exception: ', error);
            throw error;
        }
    }

    async getAllProduct() {
        try {
            let connection = await MySqlConnection.connect();
            return await new Promise((resolve, reject) => {
                connection.query(`SELECT 
                product.productId as productId,
                product.productName as productName,
                product.isRecommend as isRecommend,
                product.images as images,
                product.price_per_unit as pricePerUnit
                FROM (SELECT productTable.product_id as productId,
                productTable.product_name as productName,
                productTable.images as images,
                productTable.price_per_unit as price_per_unit,
                productTable.is_recommend as isRecommend,
                productCat.category as category
                FROM salaya_delivery.product as productTable 
                LEFT JOIN salaya_delivery.product_category as productCat 
                ON productTable.product_id = productCat.product ) as product LEFT JOIN salaya_delivery.category as categoryTable ON product.category = categoryTable.id;`, 
                [],
                (err, result) => {
                    connection.release();
                    if (err) reject(err);
                    resolve(result);
                });
            });
            
        } catch (error) {
            console.log('ProductRepository.getAllProduct() Exception: ', error);
            throw error;
        }
    }

    async getAllProductByCategoryId (categoryType) {
        try {
            let connection = await MySqlConnection.connect();

            return await new Promise((resolve, reject) => {
                connection.query(`SELECT 
                product.productId as productId,
                product.productName as productName,
                product.images as images,
                product.price_per_unit as pricePerUnit
                FROM (SELECT productTable.product_id as productId,
                productTable.product_name as productName,
                productTable.images as images,
                productCat.category as category,
                productTable.price_per_unit as price_per_unit
                FROM salaya_delivery.product as productTable 
                LEFT JOIN salaya_delivery.product_category as productCat 
                ON productTable.product_id = productCat.product ) as product LEFT JOIN salaya_delivery.category as categoryTable ON product.category = categoryTable.id
                WHERE categoryTable.id = ? `,
                 [categoryType],
                 (err, result) => {
                    connection.release();
                    if (err) reject(err);
                    resolve(result);
                });
            });
            
        } catch (error) {
            console.log('ProductRepository.getAllProductByCategoryId() Exception: ', error);
            throw error;
        }
    }

    async getProductDetailsById(productId) {
        try {

            let connection = await MySqlConnection.connect();
            return await new Promise((resolve, reject) => {
                connection.query(`SELECT 
                productTable.product_id as productId,
                productTable.product_name as productName,
                productTable.product_details as details,
                productTable.images as images,
                productTable.price_per_unit as pricePerUnit
                FROM salaya_delivery.product as productTable
                WHERE productTable.product_id = ? `,
                [productId] ,
                (err, result) => {
                    connection.release();
                    if (err) reject(err);
                    resolve(result);
                });
            });
            
        } catch (error) {
            console.log('UserRepository.getUserByEmail() Exception: ', error);
            throw error;
        }
    }

    async getProductByName(keyword) {
        try {
            let connection = await MySqlConnection.connect();
            return await new Promise((resolve, reject) => {
                connection.query(`SELECT 
                productTable.product_id as productId,
                productTable.product_name as productName,
                productTable.product_details as details,
                productTable.images as images,
                productTable.price_per_unit as pricePerUnit
                FROM salaya_delivery.product as productTable
                WHERE productTable.product_name LIKE ? `, 
                [`%${keyword}%`],
                (err, result) => {
                    connection.release();
                    if (err) reject(err);
                    resolve(result);
                });
            });
            
        } catch (error) {
            console.log('UserRepository.getUserByEmail() Exception: ', error);
            throw error;
        }
    }
}

module.exports = new ProductRepository();