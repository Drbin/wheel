class myPay { 
    price:number; 
    constructor(price:number) { 
        this.price = price 
    }  
    pay():void { 
        console.log("价格为 :   "+this.price) 
    } 
}