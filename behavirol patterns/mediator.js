class LeeFamily {

    constructor(mediator) {
        this.mediator = mediator;
        this.inbox = [];
    }

    receiveMessage = (message, from) => {
        console.log(`Message is recieved from ${from}: ${message}`);
        this.inbox.push({message, from});
    }

    sendMessage = (message, to) => {
        this.mediator.routeMessage(message, 'lee', to);
    }
}

class JamesFamily {

    constructor(mediator) {
        this.mediator = mediator;
        this.inbox = [];
    }

    receiveMessage = (message, from) => {
        console.log(`Message is recieved from ${from}: ${message}`);
        this.inbox.push({message, from})
    }

    sendMessage = (message, to) => {
        this.mediator.routeMessage(message, 'james', to);
    }
}

class Mediator {
    constructor() {
        this.leeFamily = new LeeFamily(this);
        this.jamesFamily = new JamesFamily(this);
    }

    routeMessage = (message, from, to) => {
        console.log(`Message is send from ${from} to ${to}: ${message}`);
        if (to === "lee") {
            this.leeFamily.receiveMessage(message, from);
        }
        if (to === "james") {
            this.jamesFamily.receiveMessage(message, from);
        }
    }
}

let mediator = new Mediator();
let leeFamily = new LeeFamily(mediator);
let jamesFamily = new JamesFamily(mediator);

leeFamily.sendMessage("I have something to discuss with james", 'james');
