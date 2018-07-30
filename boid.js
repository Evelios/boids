import Vector from 'vector';

class Boid {
  constructor(position, max_speed=4, max_force=0.1) {
    this.max_speed = max_speed;
    this.max_force = max_force;
    this.position = position;
    this.velocity = Vector.zero();
    this.acceleration = Vector.zero();
    this.desired_velocity = null;
  }

  seek(target) {
    const desired_direction = Vector.normalize(Vector.subtract(target, this.position));
    this.desired_velocity = Vector.multiply(desired_direction, this.max_speed);
    const steer_force = Vector.clamp(Vector.subtract(this.desired_velocity, this.velocity), this.max_force);

    this.applyForce(steer_force);
  }

  applyForce(force) {
    this.acceleration = Vector.add(this.acceleration, force);
  }

  update() {
    this.velocity = Vector.clamp(Vector.add(this.velocity, this.acceleration));
    this.position = Vector.add(this.position, this.velocity);
    this.acceleration = Vector.zero();
  }
}

export default Boid;