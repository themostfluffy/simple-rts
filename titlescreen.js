//preloader
function preload() {
  try {
    pressStart = loadFont("PressStart2P-Regular.ttf");
  } catch (e) {
    console.log("Font not loaded, using default");
  }
}

//the setup
function setup() {
  createCanvas(1350, 750);
  textFont(pressStart);
  textSize(16);
  fill(255);
  textAlign(CENTER, CENTER);
}

//ui
function draw() {
  background(0);
  textSize(40);
  text("press A to start :3", width / 2, height / 2);
}

function keyPressed() {
  if (key === "a" || key === "A") {
    // go to next scene or page
    console.log("Start pressed!");
  }
}