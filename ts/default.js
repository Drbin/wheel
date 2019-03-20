function myPay(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
myPay(1000);
myPay(1000, 0.30);
