class Player{
    lives = 3;
    shootingDelay = 2000;
    yPos = 500;
    xPos = 500;

    shoot() {
        
    }
  
}

class Enemy{
    hp = 1;
    shootingDelay = 7000;
    yPos;
    xPos;
    score = 10;

    constructor (xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;

    }
}

const spaceShip = new Player();
console.log(spaceShip);

const alien1 = new Enemy(10, 10);
console.log(alien1);

