const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const characterOrca = new Image();
characterOrca.src = "../images/orca.png";
const orca = new Orca(10,300,250, 150, ctx, characterOrca);

let idFrame;

const enemies = [];

function startGame() {
    /*Start screen behavior*/
    const btnStart = document.querySelectorAll(".intro");
    btnStart.forEach(element => element.classList.add("noShow"));
    canvas.classList.remove("noShow");

    updateScenario();
    configureBehavior();
    /* Set how often the function to create enemies will be called*/
    setInterval(() => {
        createEnemies();
    }, 5000);

}

function updateScenario() {
    ctx.clearRect(0, 0, 2000, 1200);
    backgroundImage.draw();
    backgroundImage.move();

    /* Draw the orca and the enemies*/
    orca.draw();
    callEnemies(enemies);

    showData(orca.life, orca.x, orca.y, orca.sink, orca.bubbles);
    idFrame = requestAnimationFrame(updateScenario);

    if (!orca.isAlive()) {
        alert("You died! ☠");
        cancelAnimationFrame(idFrame);
        const endScreen = document.querySelector(".end-game");
        endScreen.classList.remove("noShow");
        canvas.classList.add("noShow");
    }
}

function showData(life, x, y, k, b) {
    ctx.font = "40px Arial";
    ctx.fillText(life, 1000, 40);
    ctx.font = "22px Arial";
    ctx.fillText(`Remaining Bubbles: ${b}`, 30, 35);
    ctx.font = "22px Arial";
    ctx.fillText(`Boats sunken: ${k}`, 30, 60);
    ctx.font = "22px Arial";
    ctx.fillText(`X: ${x},Y: ${y}`, 1850,35);
}


