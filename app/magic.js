var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = "heeey"; }
        return message + 'there';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello');
//# sourceMappingURL=magic.js.map