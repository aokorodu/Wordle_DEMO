import React, { useRef } from "react";

class Spark extends React.Component {
  constructor({ x, y, maxX = 500, maxY = 500 }) {
    super();
    this.velocity = Math.random() * 5 + 0.1;
    this.angle = Math.random() * 2 * Math.PI;
    this.position = {
      startX: x,
      startY: y,
      xpos: x,
      ypos: y,
      mx: maxX,
      my: maxY,

      velocityX: Math.cos(this.angle) * this.velocity,
      velocityY: Math.sin(this.angle) * this.velocity,
      accelerationX: 0,
      accelerationY: 0.05,
    };
    this.graphicRef = React.createRef();
    this.count = 0;

    this.active = false;
  }

  isActive() {
    return this.active;
  }

  activate() {
    console.log('activate-----------')
    this.active = true;
    this.reset();
  }

  deactivate() {
    this.active = false;
    this.graphicRef.current.setAttribute("opacity", 0);
  }

  update() {
    if (!this.active) return;

    this.updateVelocity();
    this.updatePosition();
    //this.bounceX();
    //this.bounceY();
    this.draw();
    if (this.fellToEarth()) this.deactivate();
  }

  reset() {
    this.position.xpos = this.position.startX;
    this.position.ypos = this.position.startY;
    this.position.velocityX = Math.cos(this.angle) * this.velocity;
    this.position.velocityY = Math.sin(this.angle) * this.velocity;
    this.graphicRef.current.setAttribute("opacity", 1);
  }

  updateVelocity() {
    this.position.velocityX += this.position.accelerationX;
    this.position.velocityY += this.position.accelerationY;
  }

  updatePosition() {
    this.position.xpos += this.position.velocityX;
    this.position.ypos += this.position.velocityY;
  }

  bounceX() {
    if (this.position.xpos > this.position.mx) {
      this.position.xpos = this.position.mx;
      this.position.velocityX *= -1;
    } else if (this.position.xpos < 0) {
      this.position.xpos = 0;
      this.position.velocityX *= -1;
    }
  }

  bounceY() {
    if (this.position.ypos > this.position.my) {
      this.position.ypos = this.position.my;
      this.position.velocityY *= -1;
    }
  }

  fellToEarth() {
    if (
      this.position.xpos > this.position.mx + 10 ||
      this.position.xpos < -10 ||
      this.position.ypos > this.position.my + 10
    ) {
      return true;
    }
    return false;
  }

  draw() {
    this.graphicRef.current.setAttribute("cx", this.position.xpos);
    this.graphicRef.current.setAttribute("cy", this.position.ypos);
    this.graphicRef.current.setAttribute(
      "opacity",
      1 - this.position.ypos / 500
    );
  }

  render() {
    return (
      <>
        <circle
          ref={this.graphicRef}
          cx={this.position.xpos}
          cy={this.position.ypos}
          r={4}
          fill="white"
          stroke="none"
          opacity={0}
        ></circle>
      </>
    );
  }
}

export default Spark;
