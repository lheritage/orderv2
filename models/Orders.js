var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('Orders', {
    "fields": {
        "customerid": {
            "type": "string"
        },
        "shippingaddress": {
            "type": "string"
        },
        "items": {
            "type": "array"
        },
        "orderid": {
            "type": "string"
        },
        "orderheaderdata": {
            "type": "object"
        }
    },
    "connector": "memory",
    "actions": [],
    "singular": "order",
    "plural": "orders"
});
module.exports = Model;