// The proxy pattern provides a method of controlling
// the creation and use of expensive objects.

class BarrelCalculator {
    calculateNumberNeeded = (volume) => {
        return Math.ceil(volume/375);
    }
    
}

//proxy
class DragonBarrelCalculator {
    calculateNumberNeeded = (volume) => {
        if (!this.barrelCalculator) {
            this.barrelCalculator = new BarrelCalculator();
            return this.barrelCalculator.calculateNumberNeeded(volume * .77);
        }
    }
}
