class Wall {
    constructor() {
        this.height = 0;
        if (Wall._instance) {
            return Wall._instance
        }
        Wall._instance = this;
    }

    static _instance = null;
    static getInstance = () => {
        if (!Wall._instance) {
            Wall._instance = new Wall();
        }
        return Wall._instance;
    }
    setHeight = (height) => {
        this.height = height;
    }

    getHeight = () => {
        console.log(`This wall's height is ${this.height}`);
    }
}

let wall1 = new Wall();
let wall2 = new Wall();
wall1.setHeight(100);
wall1.getHeight();

wall2.setHeight(200);
wall2.getHeight();
console.log(Wall.getInstance() === wall1);
console.log(Wall.getInstance() === wall2);
