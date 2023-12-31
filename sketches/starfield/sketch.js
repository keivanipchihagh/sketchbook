let stars = new Array(7000);
let topSpeed = 200;
let minSpeed = 0;
let speed = 10;

let bgm;

function preload(){
    soundFormats('wav', 'mp3', 'ogg');
    bgm = loadSound('assets/wind-howling');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i< stars.length; i++) {
    	stars[i] = new Star();
	}
	bgm.loop();
}

function draw() {
    background(0);

    speed = map(mouseX, 0, width, 0, 200);
    bgm.rate(map(speed, 0, 200, 0, 2));
    translate(width/2, height/2);

    // Update stars
    stars.forEach(star => {
        star.update();
        star.show();
    });
}