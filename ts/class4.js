var Man = /** @class */ (function () {
    function Man(say, times) {
        this.say = say;
        this.times = times;
    }
    return Man;
}());
var obj = new Man("你好", 1);
console.log("说了什么 : " + obj.say + "说了几次 : " + obj.times);
