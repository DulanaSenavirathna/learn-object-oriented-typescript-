class Player {
    //instance variables - What player knows
    health: number
    speed: number

    //methods - what player does
    greet(){
        console.log('Hello world!')
    }
}

const mario = new Player()

mario.health = 10
mario.speed = 1
mario.greet()
