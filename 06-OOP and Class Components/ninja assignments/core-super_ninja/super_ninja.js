class Ninja {
    constructor(obj) {
        this.characterName = obj.name;
        this.health = obj.health;
        this.speed = 3;
        this.strentgh = 3;
    };

    sayName() {
        console.log(this.characterName)
    };

    showStats() {
        console.log(`${this.characterName}'s Stats:`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strentgh}`);
    };

    drinkSake() {
        this.health += 10
        console.log(`${this.characterName} drank some sake. Their health is now ${this.health}`)
    };
};

class Sensi extends Ninja {
    constructor(name) {
        super(name, 200)
        this.speed = 10;
        this.strentgh = 10;
        this.wisdom = 10;
    };

    showSensiStats() {
        super.showStats()
        console.log(`Wisdom: ${this.wisdom}`);
    };

    speakWisdom() {
        super.drinkSake();
        console.log(`${this.characterName} says, "Life is suffering. The trick is trying to find the joy in the suffering."`)
    };

};

// const zenyatta = new Sensi("Zenyatta");
// zenyatta.sayName();
// zenyatta.showSensiStats();
// zenyatta.speakWisdom();
// console.log();

genjiData = {
    name: 'Genji',
    health: 1000
}

const genji = new Ninja(genjiData);
genji.sayName();
genji.showStats();
genji.drinkSake();