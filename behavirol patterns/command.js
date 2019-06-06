
class LordInstructions {
    bringTroops = (location, numberOfTroops, when) => {
        console.log(`Command: Bring ${numberOfTroops} of Troops to ${location} until ${when}`);
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

let bringCommand1 = new BringTroopsCommand('Waterool', 500, '2019-10-10');
bringCommand1.execute();