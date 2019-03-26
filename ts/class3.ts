class People { 
   Say:string 
   
   constructor(s:string) { 
      this.Say = s 
   } 
} 
 
class Man extends People { 
   talk():void { 
      console.log("男人说了什么:  "+this.Say) 
   } 
}
  
var obj = new Man("你好"); 
obj.talk()