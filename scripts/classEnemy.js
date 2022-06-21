class Enemy extends Character {
    constructor(x, y, sizex, sizey, ctx, image) {
        super(x, y, sizex, sizey, ctx, image);
    }
}

/*-------------------------------Enemies images--------------------------------*/
const ship = new Image();
ship.src = "../images/ship.png";

const toxicSpill = new Image();
toxicSpill.src = "../images/oil.png";

const netImage = new Image();
netImage.src = "../images/toxic.png";

/*-------------------------------Random creation of enemies--------------------------------*/
const enemies = [];
const nets = [];

function createEnemies() {
    const randomNum = randomNumbers(40, 1000, 280);
    let typeEnemy;
    if (randomNum.random % 3 === 0) {
        typeEnemy = ship;
        x = 1800;
        y = 150;
        sizex = 300;
        sizey = 250;
    }
    if (randomNum.random % 2 === 0) {
        typeEnemy = toxicSpill;
        x = 1800;
        y = randomNum.posY;
        sizex = 200;
        sizey = 200;
    }
        const enemy = new Enemy(x, y, sizex, sizey, ctx, typeEnemy);
        enemies.push(enemy);

    /*-----------------------------Set random release of the nets----------------------*/
        if (typeEnemy === ship) {
            setInterval(() => {
            const randomNum = randomNumbers(20);
            if (randomNum.random % 3 === 0) {
                const net = new Enemy(enemy.x, enemy.y + 200, 100, 100, ctx, netImage);
                nets.push(net);
            }
        }, 4000);

        }
}

/*-------------------------------Drawing enemies--------------------------------*/

function callEnemies() {
enemies.forEach((enemy, index) => {
    enemy.x -= 2;
    enemy.draw();
    if (enemy.x === orca.x + 100 && (enemy.y === orca.y || enemy.y === orca.y + 100 || enemy.y === orca.y - 100)) {
        orca.getDamage(20);
        enemies.splice(index, 1);
    }

});
    nets.forEach(net => {
        net.y += 2;
        net.x -= 1;
        net.draw();
    });

}