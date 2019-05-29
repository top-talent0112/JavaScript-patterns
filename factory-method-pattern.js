let Religion = {};
class WateryGod {
    prayTo = () => {
        console.log("pray to watery God!!");
    }
}
Religion.WateryGod = WateryGod;

class AncientGod {
    prayTo = () => {
        console.log("pray to Ancient God!!");
    }
}
Religion.AncientGod = AncientGod;

class DefaultGod {
    prayTo = () => {
        console.log("pray to DefaultGod!!");
    }
}
Religion.DefaultGod = DefaultGod;

class GodFactory {
    static Build = (godName) => {
        if (godName === 'WateryGod') {
            return new WateryGod();
        }

        if (godName === 'AncientGod') {
            return new AncientGod();
        }

        return new DefaultGod();
    }
}
Religion.GodFactory = GodFactory;

class GodDeterminant {
    constructor(religionName, prayerPurpose) {
        this.religionName = religionName;
        this.prayerPurpose = prayerPurpose;
    }
}
Religion.GodDeterminant = GodDeterminant;

class Prayer {
    pray = (godName) => {
        GodFactory.Build(godName).prayTo();
    }
}
Religion.Prayer = Prayer;

let prayer1 = new Prayer();
prayer1.pray('WateryGod');
prayer1.pray();

module.exports = Religion;