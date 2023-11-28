const app = new PIXI.Application({ 
    width: 800, 
    height: 800, 
    backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

PIXI.Loader.shared.add("character.png").load(setup);

let character;
let velocity = { x: 0, y: 0 };
let keys = {};

function setup() {
    character = new PIXI.Sprite(PIXI.Loader.shared.resources["character.png"].texture);
    character.x = app.screen.width / 2;
    character.y = app.screen.height / 2;
    character.anchor.set(0.5);
    app.stage.addChild(character);

    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);

    app.ticker.add(gameLoop);
}

function gameLoop(delta) {
    character.x += velocity.x * delta;
    character.y += velocity.y * delta;
}

function keysDown(e) {
    keys[e.keyCode] = true;

    if (keys[37]) velocity.x = -5;
    if (keys[38]) velocity.y = -5;
    if (keys[39]) velocity.x = 5;
    if (keys[40]) velocity.y = 5;
}

function keysUp(e) {
    keys[e.keyCode] = false;

    if (e.keyCode === 37 || e.keyCode === 39) velocity.x = 0;
    if (e.keyCode === 38 || e.keyCode === 40) velocity.y = 0;
}
