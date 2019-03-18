var OOP = /** @class */ (function () {
    function OOP() {
    }
    OOP.prototype.name = function () {
        console.log("OOP");
    };
    return OOP;
}());
var obj = new OOP();
obj.name();
