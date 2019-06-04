class SimpleIngredient {
    constructor(name, calories, ironContent, vitaminCContent) {
        this.name = name;
        this.calories = calories;
        this.ironContent = ironContent;
        this.vitaminCContent = vitaminCContent;
    }

    get getName() {
        return this.name;
    }

    get getCalories() {
        return this.calories;
    }

    get getIronContent() {
        return this.ironContent;
    }

    get getVitaminCContent() {
        return this.vitaminCContent;
    }

}

class CompoundIngredient {
    constructor(name) {
        this.name = name;
        this.ingredients = [];
    }
    
    addIngredient = (ingredient) => {
        this.ingredients.push(ingredient);
    }

    get getName() {
        return this.name;
    }

    getCalories = () => {
        let total = 0;
        for (let i = 0; i < this.ingredients.length; i++) {    
            total += this.ingredients[i].getCalories;
        }
        return total;
    }

    getIronContents = () => {
        let total = 0;
        for (let i = 0; i < this.ingredients.length; i++) {
            total += this.ingredients[i].getIronContent;
        }
        return total;
    }

    getVitaminCCentent = () => {
        let total = 0;
        for (let i = 0; i < this.ingredients.length; i++) {
            total += this.ingredients[i].getVitaminCContent;
        }
        return total;
    }
}

let egg = new SimpleIngredient("Egg", 155, 6, 0);
let milk = new SimpleIngredient("Milk", 42, 0, 0);
let sugar = new SimpleIngredient("Sugar", 387, 0, 0);
let rice = new SimpleIngredient("Rice", 370, 8, 0);

let ricePudding = new CompoundIngredient("Rice Pudding");
ricePudding.addIngredient(egg);
ricePudding.addIngredient(rice);
ricePudding.addIngredient(milk);
ricePudding.addIngredient(sugar);

console.log("A serving of rice pudding contains:");
console.log(ricePudding.getCalories() + "calories".padStart(20, '--'));