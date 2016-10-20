class Greeter {
    saySomething(message: string = "heeey") {
        return message + 'there';
    }
}
var greeter = new Greeter();
greeter.saySomething('hello'); 