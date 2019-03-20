function myPay(...price:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<price.length;i++) { 
       sum = sum + price[i]; 
    } 
    console.log("和为：",sum) 
 } 
 myPay(1,2,3) 
 myPay(10,10,10,10,10)