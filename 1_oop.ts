class Player1 {
    //instance variables - What player knows
    health: number
    speed: number

    //methods - what player does
    greet(){
        console.log('Hello world!')
    }
}

const mario1 = new Player1()

mario1.health = 10
mario1.speed = 1
mario1.greet()
