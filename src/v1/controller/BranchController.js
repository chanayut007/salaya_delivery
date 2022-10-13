const http = require('./../../config/http');
const BranchService = require('./../services/BranchService');

class BranchController {

    async getBranchNearby(req, res) {
        try {

            let { latitude, longitude } = req.query;

            if (!latitude || !longitude) {
                res.status(http.HTTP_CLIENT_ERROR_CODE).send({
                    "statusCode": http.HTTP_CLIENT_ERROR_CODE,
                    "statusMessage": http.HTTP_BRANCH_LAT_LNG_INVALID
                });
            }

            let result = await BranchService.getBranchNearby(latitude, longitude);

            res.status(http.HTTP_SUCCESS_CODE).send({
                "statusCode": http.HTTP_SUCCESS_CODE,
                "statusMessage": http.HTTP_SUCCESS_MSG,
                "data": result
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

module.exports = new BranchController();