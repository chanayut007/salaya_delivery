const config = require('./../config/config');
const mysql = require('mysql');

class MySqlConnection {

    #connection = mysql.createPool(config.db);

    async connect() {
        try{
            return await new Promise((resolve, reject) => {
                this.#connection.getConnection((err, connection) => {
                    if (err) {
                        console.log(`Connect Database Failed, ${err}`);
                        reject(err);
                    } else {
                        console.log('Connect Database is Successfully');
                        resolve(connection);
                    }
                });
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new MySqlConnection();

