const dayjs = require('dayjs');
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

const getOrderNumber = () => {
    let date = getFormatDate("DDMMYYHHMMss");
    return `ORDER${date}`;
}

const getCheckoutDate = () => {
    return getFormatDate();
}

const getTotalPrice = (qty, pricePerUnit) => {
    return parseInt(qty) * parseFloat(pricePerUnit);
}

const getFormatDate = (formatDate = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs().tz("Asia/Bangkok").format(formatDate);
}

module.exports = { getOrderNumber, getCheckoutDate, getTotalPrice };

