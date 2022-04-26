class Ninja {
    constructor(name, health) {
        this.ninjaName = name;
        this.ninjaHealth = health;
        this.ninjaSpeed = 3;
        this.ninjaStrength = 3;
    }

    sayName(){
        console.log(this.ninjaName)
    }

    showStats(){
        console.log('Ninja Stats:');
        console.log(`Name: ${this.ninjaName}`);
        console.log(`Health: ${this.ninjaHealth}`);
        console.log(`Speed: ${this.ninjaSpeed}`);
        console.log(`Strength: ${this.ninjaStrength}`);
    }

    drinkSake(){
        this.ninjaHealth += 10
        console.log(`The ninja drank some sake. Their health is now ${this.ninjaHealth}`)
    }
}

const genji = new Ninja('Genji', 200);
genji.sayName();
genji.showStats();
genji.drinkSake();