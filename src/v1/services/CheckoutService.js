const CheckoutRepository = require('./../repository/CheckoutRepository');
const { getOrderNumber, getCheckoutDate, getTotalPrice } = require('./../../utils/util');

class CheckoutService {

    async checkout(orders) {

        try {

            let orderNo = getOrderNumber();

            let dataOrders = {
                orderNo: orderNo,
                customerName: orders.customerName,
                customerPhone: orders.customerPhone,
                address: orders.address,
                customerComment: orders.customerComment,
                shipTo: orders.shipTo,
                branchShipping: orders.branchShipping,
                checkoutDate: getCheckoutDate()
            };

            let resultOrder = await CheckoutRepository.importOrder(dataOrders);

            for (let item of orders.items) {
                let dataItem = {
                    orderNo: orderNo,
                    itemNo: item.itemNo,
                    itemName: item.itemName,
                    qty: item.qty,
                    pricePerUnit: item.pricePerUnit,
                    totalPrice: getTotalPrice(item.qty, item.pricePerUnit)
                };

                let resultItem = await CheckoutRepository.importItems(dataItem);
            }

            return true;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = new CheckoutService();