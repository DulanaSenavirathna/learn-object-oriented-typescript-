class Player2 {
    name: string
    health: number
    isInvincible: boolean
    crush: Player2

    greet() {
        console.log(`Hello world! I'm ${this.name}`)
    }
}


const mario2 = new Player2();
mario2.name = "Mario";
mario2.health = 10;
mario2.isInvincible = true;

const peach2 = new Player2();
peach2.name = "Peach";
peach2.health = 8;
peach2.isInvincible = true;

mario2.greet();
peach2.greet();

// 
mario2.crush = peach2
console.log(`crush name: ${mario2.crush.name}`);

