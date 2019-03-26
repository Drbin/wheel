class myPay{
     static price:number;
      static pay():void { 
           console.log("价格为 "+ myPay.price) 
       } 
}
myPay.price = 12     // 初始化静态变量
myPay.pay()  