const MySqlConnection = require('./../../connections/MySQLConnection');

class CategoryRepository {

    async getAllCategory() {
        try {
            let connection = await MySqlConnection.connect();
            return await new Promise((resolve, reject) => {
                connection.query(`SELECT
                cateTable.id as categoryId,
                cateTable.category_name as categoryName
                FROM salaya_delivery.category as cateTable`, 
                [],
                (err, result) => {
                    connection.release();
                    if (err) reject(err);
                    resolve(result);
                });
            });
            
        } catch (error) {
            console.log('CategoryRepository.getAllCategory() Exception: ', error);
            throw error;
        }
    }

}

module.exports = new CategoryRepository();