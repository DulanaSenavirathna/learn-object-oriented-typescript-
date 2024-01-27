var Player2 = /** @class */ (function () {
    function Player2() {
    }
    Player2.prototype.greet = function () {
        console.log("Hello world! I'm ".concat(this.name));
    };
    return Player2;
}());
var mario2 = new Player2();
mario2.name = "Mario";
mario2.health = 10;
mario2.isInvincible = true;
var peach2 = new Player2();
peach2.name = "Peach";
peach2.health = 8;
peach2.isInvincible = true;
mario2.greet();
peach2.greet();
// 
mario2.crush = peach2;
console.log("crush name: ".concat(mario2.crush.name));
