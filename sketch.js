const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var batman, thunder;

function preload() {
    thunder_img = loadImage("cloud.png");
}

function setup() {
    createCanvas(1365, 650);
    engine = Engine.create();
    world = engine.world;

    batman = new Batman(650, 500, 125, 240);

}

function draw() {
    Engine.update(engine);
    background(0);

    batman.display();

    if (frameCount % 10 === 0) {
        drops.push(new Drops(random(1025, 1250), -20, 7));
    }

    if (frameCount % 10 === 0) {
        drops.push(new Drops(random(825, 1050), -20, 7));
    }

    if (frameCount % 10 === 0) {
        drops.push(new Drops(random(625, 850), -20, 7));
    }

    if (frameCount % 10 === 0) {
        drops.push(new Drops(random(425, 650), -20, 7));
    }

    if (frameCount % 10 === 0) {
        drops.push(new Drops(random(225, 450), -20, 7));
    }

    if (frameCount % 10 === 0) {
        drops.push(new Drops(random(25, 250), -20, 7));
    }

    for (var j = 0; j < drops.length; j++) {
        fill("blue");
        drops[j].display();
    }

    if (frameCount % 20 === 0) {
        thunder = createSprite(random(100, 1000), 40, 80, 80);
        var rand = Math.round(random(1, 5));
        switch (rand) {
            case 1: thunder.y = -200;
                break;
            case 2: thunder.y = -200;
                break;
            case 3: thunder.y = -200;
                break;
            case 4: thunder.addImage("thunder", thunder_img);
                thunder.lifetime = 15;
                break;
            case 5: thunder.y = -200;
                break;
        }
    }

    drawSprites();
}
