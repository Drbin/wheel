var myPay = /** @class */ (function () {
    function myPay(price) {
        this.price = price;
    }
    myPay.prototype.pay = function () {
        console.log("价格为 :   " + this.price);
    };
    return myPay;
}());
