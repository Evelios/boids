var Boids = (function () {
  'use strict';

  class Boid {
    constructor(position) {
      this.pos = position;
    }

    update() {

    }
  }

  class Flock {
    constructor() {
      this.boid = new Boid();
    }
  }

  return Flock;

}());
