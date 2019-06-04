// The façade pattern is a special case of the adapter pattern that provides a
// simplified interface over a collection of classes. I mentioned such a scenario
// in the Adapter section but only within the context of a single class, SimpleShip.
// This same idea can be expanded to provide an abstraction around a group of
// classes or an entire subsystem.

class Ship {
    turnLeft = () => {
    }

    turnRight = () => {
    }

    goForward = () => {
    }
    
    goBackward = () => {
    }
}

class Admiral {
    sailWest = () => {

    }

    sailEast = () => {
        
    }

    sailNorth = () => {

    }

    sailSouth = () => {

    }
}

class SupplyCoordinator {

}

class Fleet {
    setDestination = (destination) => {
        //pass commands to a series of ships, admirals and whoeverelse needs it
    }

    resupply = () => {

    }

    attack = () => {
        //attack a city
    }
}

