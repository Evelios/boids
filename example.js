"use strict";

// Colors
var bgColor = tinycolor("#303030");
var bgAccent = tinycolor("#393939");
var primaryColor = tinycolor("#AA7539");
var secondaryColor = tinycolor("#A23645");
var tertiaryColor = tinycolor("#27566B");
var quaternaryColor = tinycolor("#479030");

// Globals
var global = {
  width: null,
  height: null,
  bbox: null,
  boid: null,
};

var params = {
};

// ---- High Level Functions ---------------------------------------------------

function setup() {
  global.width = document.body.clientWidth || window.innerWidth;
  global.height = document.body.clientHeight || window.innerHeight;
  global.bbox = [global.width, global.height];

  createCanvas(global.width, global.height);

  setUpGui();
  createAndRender();
}

function setUpGui() {
  // var gui = new dat.GUI();
  // gui.add(params, "").name("Name").onChange(createAndRender);
}

function createAndRender() {
  create();
  render();
}

function create() {
  const max_speed = 3;
  const max_acceleration = 0.2;
  const start_pos = [global.width / 2, global.height / 2];
  global.boid = new Boid(start_pos, max_speed, max_acceleration);
}

function draw() {
  if (global.boid) {
    global.boid.seek([mouseX, mouseY]);
    global.boid.update();
  }

  render();
}

function render() {
  background(bgColor.toHexString());

  if (global.boid) {
    const boidPos = global.boid.position;
    noStroke();
    fill(primaryColor.toHexString());
    ellipse(boidPos[0], boidPos[1], 5);
  }
}