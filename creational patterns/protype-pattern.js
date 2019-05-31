class Family {
    clone = () => {
        let clonedOne = new Family();
        for (let attr in this) {
            clonedOne[attr] = this[attr];
        }
        return clonedOne;
    }
}

let member1 = new Family();
member1.name = 'JavaScript';
member1.mother = 'Queen';
member1.father = 'King';

let clonedMember  = member1.clone();

console.log(member1, clonedMember);