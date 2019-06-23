class TravelResult {
    constructor(durationInDays, probabilityOfDeath, cost) {
        this.durationInDays = durationInDays;
        this.probabilityOfDeath = probabilityOfDeath;
        this.cost = cost;
    }
}

class SeaGoingVessel {
    travel = (source, destination) => {
        return new TravelResult(15, .25, 500);
    }
}

class Horse {
    travel = (source, destination) => {
        return new TravelResult(30, .25, 50);
    }
}

class Walk {
    travel = (source, destination) => {
        return new TravelResult(150, .55, 0);
    }
}
function getCurrentMoney(money) {
    return money;
}

let currentMoney = getCurrentMoney(100);
let strat;
if (currentMoney > 500)
    strat = new SeaGoingVessel();
else if (currentMoney > 50)
    strat = new Horse();
else
    strat = new Walk();

let travelResult = strat.travel();

console.log("Result:", travelResult);