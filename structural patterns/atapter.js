class Ship {
    constructor() {
        this.state = {
            speed: 0,
            rudderAngle: 0,
            sailAngle: 0,
        }
    }
    SetRudderAngleTo = (angle) => {
        console.log("Set the rudder angle to:", angle);
        this.state.rudderAngle = angle;
    }

    SetSailConfiguration = (configuration) => {
        console.log("Set SetSailConfiguration", configuration);
    }

    SetSailAngle = (angle) => {
        console.log("Set Sail angle:", angle);
        this.state.sailAngle = angle;
    }

    GetCurrentBearing = (bearing) => {
        console.log("GetCurrentBearing", bearing);   
    }

    GetCurrentSpeedEstimate = () => {
        return speed;   
    }

    ShiftCrewWeightTo = () => {
        console.log("Go Crew...");  
    }
}

class ShipAdapter {
    constructor() {
        this.ship = new Ship();
    }

    TurnLeft = () => {
        this.ship.SetSailAngle(-30);
    }
    TurnRight = () => {
        this.ship.SetSailAngle(30);
    }
    GoForward = () => {
        this.ship.SetSailAngle(0);
    
    }
    GoBackward = () => {
        this.ship.SetSailAngle(-180);
    }
}

var simpleShip = new ShipAdapter();
simpleShip.GoForward();
simpleShip.TurnLeft();
simpleShip.GoBackward();