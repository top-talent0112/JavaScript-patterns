let Soldier1 = (function () {
    function Soldier() {
        this.Health = 10;
        this.FightingAbility = 5;
        this.Hunger = 0;
    }
    return Soldier;
})();

let Soldier2 = (function () {
    function Soldier() {}
    Soldier.prototype.Health = 10;
    Soldier.prototype.FightingAbility = 5;
    Soldier.prototype.Hunger = 0;
    return Soldier;
})();

let soldier1 = new Soldier2();
let soldier2 = new Soldier2();

console.log(soldier1.Health); //10

soldier1.Health = 7;

console.log(soldier1.Health); //7
console.log(soldier2.Health); //10

delete soldier1.Health;

console.log(soldier1.Health); //10