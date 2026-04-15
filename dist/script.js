window.addEventListener("DOMContentLoaded", function() {
    drawGround();
    drawSnowText();
    drawSnowman();
    drawSnowflakes();
});

// Background: "Snow" text
function drawSnowText() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    ctx.font = "80px Verdana";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "blue";
    ctx.fillText("SNOW", canvas.width / 2, 10);
}

// Snowman
function drawSnowman() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "white";

    // Bottom circle
    ctx.beginPath();
    ctx.arc(150, 200, 50, 0, Math.PI * 2);
    ctx.fill();

    // Middle circle
    ctx.beginPath();
    ctx.arc(150, 120, 40, 0, Math.PI * 2);
    ctx.fill();

    // Top circle
    ctx.beginPath();
    ctx.arc(150, 60, 25, 0, Math.PI * 2);
    ctx.fill();
}

// Single snowflakes
function drawSingleFlake(x, y) {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const flakeSize = 4; 

    ctx.beginPath();
    ctx.fillStyle = "#eee";
    ctx.moveTo(x, y);
    ctx.lineTo(x + flakeSize / 2, y + flakeSize / 2);
    ctx.lineTo(x, y + flakeSize);
    ctx.lineTo(x - flakeSize / 2, y + flakeSize / 2);
    ctx.fill();
}

function drawGround() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    // Sky
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Ground
    ctx.fillStyle = "brown";
    ctx.fillRect(0, 250, canvas.width, 50);
}

function drawSnowflakes() {
    for (let i = 0; i < 100; i++) {
        let x = Math.random() * 300;
        let y = Math.random() * 300;
        drawSingleFlake(x, y);
    }
}