//we are goning to make the interface
// interface God {
//      prayTo(): void  
// }
//

let Religion = {};
class WateryGod {
    prayTo = () => {
        console.log("pray to watery God!!");
    }
}
Religion.WateryGod = WateryGod;

class AncientGod {
    prayTo = () => {
        console.log("pray to Ancient God!!");
    }
}
Religion.AncientGod = AncientGod;

class SevenGod {
    prayTo = () => {
        console.log("pray to Seven God!!");
    }
}
Religion.SevenGod = SevenGod;

class WateryGodAdapter {
    constructor() {
        this.wateryGod = new WateryGod();
    }

    prayTo = () => {
        this.wateryGod.prayTo();
    }
}

class AncientGodAdapter {
    constructor() {
        this.ancientGod = new AncientGod();
    }

    prayTo = () => {
        this.ancientGod.prayTo();
    }
}

class SevenGodAdapter {
    constructor() {
        this.sevenGod = new SevenGod();
    }

    prayTo = () => {
        this.sevenGod.prayTo();
    }
}

let god1 = new AncientGodAdapter();
let god2 = new WateryGodAdapter();
let god3 = new SevenGodAdapter();

let gods = [god1, god2, god3];

for (let i = 0; i < gods.length; i++) {
    gods[i].prayTo();
}