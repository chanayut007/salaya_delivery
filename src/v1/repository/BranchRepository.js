const MySqlConnection = require('./../../connections/MySQLConnection');

class BranchRepository {

    async getAllBranch() {
        try {

            let connection = await MySqlConnection.connect();
            return await new Promise((resolve, reject) => {
                connection.query(`SELECT 
                branchTable.branch_id as branchId,
                branchTable.branch_name as branchName
                FROM salaya_delivery.branch as branchTable`,
                [],
                (err, result) => {
                    connection.release();
                    if (err) reject(err);
                    resolve(result);
                });
            });

        } catch (error) {
            throw error;
        }
    }

}

module.exports = new BranchRepository();