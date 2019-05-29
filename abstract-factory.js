class KingJaff {
    makeDecision = () => {
        console.log("I am the king who can make decisions");
    }
    marry = () => {
        console.log("I am the king who can marry someone");
    }
}

//hand of the king

class LordJohn {
    makeDecision = () => {
        console.log("I am the hand of the king who can make decision on behalf of the king");
    }

}

class GunFactory {
    getKing = () => {
        return new KingJaff();
    }

    getHandOfTheKing = () => {
        return new LordJohn();
    }    
}

class BeerFactory {
    getKing = () => {
        return new KingJaff();
    }

    getHandOfTheKing = () => {
        return new LordJohn();
    }   
}

class CourtSession {
    constructor(abstractFactory) {
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD = 10;
    }

    complaintPresented = (complaint) => {
        if (complaint.severity < this.COMPLAINT_THRESHOLD) {
            this.abstractFactory.getHandOfTheKing().makeDecision();
        } else {
            this.abstractFactory.getKing().makeDecision();
        }
    }
}

let courtSession1 = new CourtSession(new GunFactory());
courtSession1.complaintPresented({ severity: 8 });
courtSession1.complaintPresented({ severity: 12 });

let courtSession2 = new CourtSession(new BeerFactory());
courtSession2.complaintPresented({ severity: 8 });
courtSession2.complaintPresented({ severity: 12 });
