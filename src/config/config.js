require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    db: {
        connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
        host: process.env.DB_HOSTNAME || 'localhost',
        user: process.env.DB_USERNAME || 'root',
        password: process.env.PASSWORD || '',
        database: process.env.DB_DATABASE_NAME,
        port: process.env.DB_PORT || 3306,
    },
    endpointImageUrl: `${process.env.IMAGE_ENDPOINT}:${process.env.IMAGE_PORT}`,
};

module.exports = config;