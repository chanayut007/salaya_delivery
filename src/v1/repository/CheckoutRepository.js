const MySqlConnection = require('./../../connections/MySQLConnection');

class CheckoutRepository {

    async importOrder(orders) {
        try {
            let connection = await MySqlConnection.connect();
            return await new Promise((resolve, reject) => {
                connection.query(`INSERT INTO salaya_delivery.order (
                    order_no, customer_name, customer_phone, address, customer_comment, shipTo, branch_shipping, checkout_date
                    ) VALUES(?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE
                    customer_name=?,
                    customer_phone=?,
                    address=?,
                    customer_comment=?,
                    shipTo=?,
                    branch_shipping=?,
                    checkout_date=?`,
                    [
                        /* VALUE INSERT */
                        orders.orderNo,
                        orders.customerName,
                        orders.customerPhone,
                        orders.address,
                        orders.customerComment,
                        orders.shipTo,
                        orders.branchShipping,
                        orders.checkoutDate,

                        /* VALUE UPDATE */
                        orders.customerName,
                        orders.customerPhone,
                        orders.address,
                        orders.customerComment,
                        orders.shipTo,
                        orders.branchShipping,
                        orders.checkoutDate,

                    ], (err, result) => {
                        connection.release();
                        if (err) reject(err);
                        resolve(result);
                    });
            });
        } catch (error) {
            throw error;
        }        
    }

    async importItems(item) {
        try {
            let connection = await MySqlConnection.connect();
            return await new Promise((resolve, reject) => {
                connection.query(`INSERT INTO salaya_delivery.item (
                    order_no, item_no, item_name, qty, price_per_unit, total_price
                    ) VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE
                    item_name=?,
                    qty=?,
                    price_per_unit=?,
                    total_price=?`,
                    [
                        /* VALUE INSERT */
                        item.orderNo,
                        item.itemNo,
                        item.itemName,
                        item.qty,
                        item.pricePerUnit,
                        item.totalPrice,

                        /* VALUE INSERT */
                        item.itemName,
                        item.qty,
                        item.pricePerUnit,
                        item.totalPrice
                        
                    ], (err, result) => {
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

module.exports = new CheckoutRepository();