let currentColor;

function setup() {
  createCanvas(800, 600);
  currentColor = color(0); 
  noStroke();
  const colors = [color(255,0,0), color(255,165,0), color(255,255,0), color(0,255,0), color(0,255,255), color(0,0,255), color(255,0,255), color(165,42,42),color(255,255,255), color(0)];
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(0, i * 60, 60, 60);
  }
}

function draw() {
  if (mouseIsPressed) {
    if (mouseX > 60) { 
      fill(currentColor);
      ellipse(mouseX, mouseY, 20, 20);
    }
  }
}

function mousePressed() {
  if (mouseX < 60) {
    let index = floor(mouseY / 60);
    if (index >= 0 && index < 10) {
      currentColor = get(mouseX, mouseY);
    }
  }
}