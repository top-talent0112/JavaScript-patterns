class Spy {
    constructor() {
        this.partiesToNotify = [];
    }

    subscribe = (subscriber) => {
        this.partiesToNotify.push(subscriber);
        console.log(`${subscriber.constructor.name} has been subscribed succesfully`);
    }

    unsubscribe = (subscriber) => {
        this.partiesToNotify.slice(this.partiesToNotify.indexOf(subscriber), 1);
    }

    setPainKillers = (painKillers) => {
        this.painKillers = painKillers;
        for (let i = 0; i < this.partiesToNotify.length; i++) {
            this.partiesToNotify[i](painKillers);
        }
    }
}

class Player {
    onKingPainKillerChange = (newPainKillerAmount) => {
        console.log("newPainKillerAmount", newPainKillerAmount);
    }
}

let s = new Spy();
let p1 = new Player();
let p2 = new Player();

s.subscribe(p1.onKingPainKillerChange); //p is now a subscriber
s.subscribe(p2.onKingPainKillerChange); //p is now a subscriber

s.setPainKillers(12); //s will notify all subscribers