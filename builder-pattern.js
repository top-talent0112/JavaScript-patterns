{/* 
    senario of the implmentation
    Tournaments are an example of a complicated class. Each tournament has a
complicated setup involving the events, the attendees, and the prizes. Much of the
setup for these tournaments is similar: each one has a joust, archery, and a melee.
Creating a tournament from multiple places in the code means that the responsibility
of knowing how to construct a tournament is distributed. If there is a need to change
the initiation code, then it must be done in a lot of different places.

*/}
let Collection = {};
class Event {
    constructor(name) {
        this.name = name;
    }
}
Collection.Event = Event;

class Prize {
    constructor(name) {
        this.name = name;
    }
}
Collection.Prize = Prize;

class Attendee {
    constructor(name) {
        this.name = name;
    }
}
Collection.Attendee = Attendee;

class Tournament {
    constructor() {
        this.events = [];
        this.prizes = [];
        this.attendees = [];
    }
}
Collection.Tournament =  Tournament;

class BostonTournamentBuilder {
    build = () => {
        let tournament = new Tournament();
        tournament.events.push(new Event("Joust"));
        tournament.events.push(new Event("More exciting"));

        tournament.attendees.push(new Attendee("Attendee1"));
        tournament.attendees.push(new Attendee("Attendee2"));
        
        tournament.prizes.push(new Event("Gold Cup"));
        tournament.prizes.push(new Event("Silver Cup"));
    }
}
Collection.BostonTournamentBuilder = BostonTournamentBuilder;

class NYTournamentBuilder {
    build = () => {
        let tournament = new Tournament();
        tournament.events.push(new Event("Joust in NY"));
        tournament.events.push(new Event("More exciting in NY"));

        tournament.attendee.push(new Attendee("Attendee1 in NY"));
        tournament.attendee.push(new Attendee("Attendee2 in NY"));
        
        tournament.prizes.push(new Event("Gold Cup"));
        tournament.prizes.push(new Event("Silver Cup"));
    }
}
Collection.NYTournamentBuilder = NYTournamentBuilder;

class TournamentBuilder {
    build = (builder) => {
        return builder.build();
    }
}
Collection.TournamentBuilder = TournamentBuilder;
let bostonTournament = new TournamentBuilder(new BostonTournamentBuilder());
console.log("Boston tournament", bostonTournament);
module.exports = Collection;