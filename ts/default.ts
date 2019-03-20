function myPay(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("计算结果: ",discount); 
} 
myPay(1000) 
myPay(1000,0.30)