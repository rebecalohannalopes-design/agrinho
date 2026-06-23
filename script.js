const player = document.getElementById("player");
const item = document.getElementById("item");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");

let score = 0;

let playerX = 280;
let playerY = 180;

const gameWidth = 600;
const gameHeight = 400;

let itemX;
let itemY;
let itemType;

function spawnItem() {

    itemX = Math.random() * 550;
    itemY = Math.random() * 350;

    item.style.left = itemX + "px";
    item.style.top = itemY + "px";

    const random = Math.random();

    if(random < 0.7){
        item.innerHTML = "🌱";
        itemType = "good";
    }else{
        item.innerHTML = "🛢️";
        itemType = "bad";
    }
}

spawnItem();

document.addEventListener("keydown", (e)=>{

    const step = 20;

    if(e.key === "ArrowUp") playerY -= step;
    if(e.key === "ArrowDown") playerY += step;
    if(e.key === "ArrowLeft") playerX -= step;
    if(e.key === "ArrowRight") playerX += step;

    playerX = Math.max(0, Math.min(gameWidth - 50, playerX));
    playerY = Math.max(0, Math.min(gameHeight - 50, playerY));

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";

    checkCollision();
});

function checkCollision(){

    const dx = playerX - itemX;
    const dy = playerY - itemY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance < 40){

        if(itemType === "good"){
            score += 10;
        }else{
            score -= 5;
        }

        scoreText.textContent = score;

        if(score >= 100){
            message.innerHTML =
            "🏆 Parabéns! Você promoveu uma agricultura sustentável!";
        }

        spawnItem();
    }
}