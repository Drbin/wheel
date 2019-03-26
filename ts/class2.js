var myPay = /** @class */ (function () {
    function myPay() {
    }
    myPay.pay = function () {
        console.log("价格为 " + myPay.price);
    };
    return myPay;
}());
myPay.price = 12; // 初始化静态变量
myPay.pay();
