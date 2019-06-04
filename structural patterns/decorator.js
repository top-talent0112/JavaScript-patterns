// The decorator pattern is used to wrap and augment an existing class. Using a
// decorator pattern is an alternative to subclassing an existing component.  

class BasicArmor {
    calculateDamageFromHit = (hit) => {
        return hit;
    }

    getArmorIntegrity = () => {
        return 1;
    }
}

class ChainMail {
    constructor(decoratedArmor) {
        this.decoratedArmor = decoratedArmor;
    }

    calculateDamageFromHit = (hit) => {
        hit.Strength = hit.Strength * 8;
        return this.decoratedArmor.calculateDamageFromHit(hit);
    }

    getArmorIntegrity = () => {
        return .9 * this.decoratedArmor.getArmorIntegrity();
    }
}

// export interface IArmor{
//     CalculateDamageFromHit(hit: Hit):number;
//     GetArmorIntegrity():number;
// }

let armor = new ChainMail(new BasicArmor());
console.log(armor.calculateDamageFromHit({
    Location: "head",
    Weapon: "Sock filled with pennies", 
    Strength: 12
}));