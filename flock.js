import Boid from './boid';
import array from 'new-array';
import parseRect from 'parse-rect';

class Flock {
  constructor(bbox, num_boids=10) {
    // Of the form {x, y, width, height}
    this.bbox = parseRect(bbox);
    this.boids = array(num_boids).map(() => new Boid(randomPointInBbox()));
  }

  randomPointInBbox() {
    return [
      this.bbox.x + Math.random() * this.bbox.width,
      this.bbox.y + Math.random() * this.bbox.height,
    ];
  }
}

export default Flock;