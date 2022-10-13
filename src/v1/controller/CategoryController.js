const http = require('./../../config/http');

const CategoryService = require('./../services/CategoryService');

class CategoryController {

    async getAllCategory(req, res) {

        try {
            let result = await CategoryService.getAllCategory();

            res.status(http.HTTP_SUCCESS_CODE).send({
                "statusCode": http.HTTP_SUCCESS_CODE,
                "statusMessage": http.HTTP_SUCCESS_MSG,
                "data": result
            });
        } catch (error) {

            res.status(http.HTTP_INTERNAL_SERVER_CODE).send({
                "statusCode": http.HTTP_INTERNAL_SERVER_CODE,
                "statusMessage": http.HTTP_INTERNAL_SERVER_MSG,
                "error": error
            });
        }
    }

}

module.exports = new CategoryController();