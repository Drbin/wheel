function myPay() {
    var price = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        price[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < price.length; i++) {
        sum = sum + price[i];
    }
    console.log("和为：", sum);
}
myPay(1, 2, 3);
myPay(10, 10, 10, 10, 10);
