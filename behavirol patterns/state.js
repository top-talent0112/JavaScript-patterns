class BankAccountManager {
    constructor() {
        this.currentState = new GoodStandingState(this);
    }

    deposit = (amount) => {
        this.currentState.deposit(amount);
    }

    withdraw = (amount) => {
        this.currentState.withdraw(amount);
    }
    
    addToBalance = (amount) => {
        this.balance += amount;
    }
    
    getBalance = () => {
        return this.balance;
    }

    moveToState = (newState) => {
        this.currentState = newState;
    }
}

class GoodStandingState {
    constructor(manager) {
        this.manager = manager;
    }

    deposit = (amount) => {
        this.manager.addToBalance(amount);
    }

    withdraw = (amount) => {
        if (this.manager.getBalance() < amount) {
            this.manager.moveToState(new OverDrawnState(this.manager));
        }
        this.manager.addToBalance(-1 * amount);
    }
}

class OverDrawnState {
    constructor(manager) {
        this.manager = manager;
    }

    deposit = (amount) => {
        this.manager.addToBalance(amount);
        if (this.manager.getBalance() > 0) {
            this.manager.moveToState(new GoodStandingState(this.manager));
        }
    }

    withdraw = (amount) => {
        this.manager.moveToState(new OnHold(this.manager));
        throw "Cannnot withdraw money from an already overdrawn bank account";
    }
}

class OnHold {
    constructor(manager) {
        this.manager = manager;
    }

    deposit = (amount) => {
        this.manager.addToBalance(amount);
        throw "You account is on hold and you must go to the bank to resolve the issue";
    }

    withdraw = (amount) => {
        throw "You account is on hold and you must go to the bank to resolve the issue";
    }
}

// goodStandingState
//     .on("withdraw")
//     .when(function(manager){return manager.balance > 0;})
//     .transitionTo("goodStanding")
//     .when(function(manager){return mangaer.balance <=0;})
//     .transitionTo("overdrawn");

let bankAccountManager = new BankAccountManager();
let goodStandingState = new GoodStandingState(bankAccountManager);
let overdrawnState = new OverDrawnState(bankAccountManager);
let onHoldState = new OnHold(bankAccountManager);

goodStandingState.deposit(100);