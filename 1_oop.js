var Player1 = /** @class */ (function () {
    function Player1() {
    }
    //methods - what player does
    Player1.prototype.greet = function () {
        console.log('Hello world!');
    };
    return Player1;
}());
var mario1 = new Player1();
mario1.health = 10;
mario1.speed = 1;
mario1.greet();
