interface People { 
   say:string 
} 
 
class Man implements People { 
   say:string 
   times:number 
   
   constructor(say:string , times:number) { 
      this.say = say 
      this.times = times 
   } 
} 
 
var obj = new Man("你好",1) 
console.log("说了什么 : "+obj.say+"说了几次 : "+obj.times )