
class LordInstructions {
    bringTroops = (location, numberOfTroops, when) => {
        setTimeout(() => {
            console.log(`Command: Bring ${numberOfTroops} of Troops to ${location} until ${when}`);
        }, 1000 * 5);
        
    }
}

class BringTroopsCommand {
    constructor(location, numberOfTroops, when) {
        this.location = location;
        this.numberOfTroops = numberOfTroops;
        this.when = when;
    }

    execute = () => {
        let receiver = new LordInstructions();
        receiver.bringTroops(this.location, this.numberOfTroops, this.when);
    }
}

let bringCommand1 = new BringTroopsCommand('Waterool', 500, '2019-01-10');
let bringCommand2 = new BringTroopsCommand('New York', 500, '2019-02-10');
let bringCommand3 = new BringTroopsCommand('Boston', 500, '2019-04-10');

process.nextTick(() => bringCommand1.execute());
console.log("I am gonna doing something else");
