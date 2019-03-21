function myPay(id:number,name:string) { 
    this.id = id 
    this.name = name 
} 
 
let pay = new myPay(123,"js权威指南") 
myPay.prototype.price = "￥79.00" 
 
console.log("书号: "+pay.id) 
console.log("名称: "+pay.name) 
console.log("价格: "+pay.price)