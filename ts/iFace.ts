interface iFace{ 
   names:string, 
    age:number, 
    sayHelloWorld: ()=>string 
} 
 
var initMsg:iFace = { 
    names:"world",
    age:12, 
    sayHelloWorld: ():string =>{return "HelloWorld"} 
} 
 
console.log("initMsg对象 ") 
console.log(initMsg.names) 
console.log(initMsg.age) 
console.log(initMsg.sayHelloWorld())  
 
var initMain:iFace = { 
    names:"typescript",
    age:10, 
    sayHelloWorld: ():string =>{return "Hello!!!"} 
} 
 
console.log("initMain对象 ") 
console.log(initMain.names) 
console.log(initMain.age)
console.log(initMain.sayHelloWorld)