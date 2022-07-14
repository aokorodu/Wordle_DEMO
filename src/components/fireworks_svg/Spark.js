import React from "react";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Spark extends React.Component {
  constructor({ x, y, maxX = 500, maxY = 500 }) {
    super();
    this.velocity = Math.random() * 5 + 0.1;
    this.angle = Math.random() * 2 * Math.PI;
    this.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    this.radius = Math.round(1 + Math.random() * 2);
    this.position = {
      startPoint: new Point(x, y),
      currentPoint: new Point(x, y),
      priorPoints: [],
      mx: maxX,
      my: maxY,
      velocityX: Math.random() * 8 - 4,//Math.cos(this.angle) * this.velocity,
      velocityY: Math.random() * 8 - 4, //Math.sin(this.angle) * this.velocity,
      accelerationX: 0,
      accelerationY: 0.05,
    };
    this.graphicRef = React.createRef();
    this.trailRef = React.createRef();
    this.count = 0;

    this.active = false;
  }

  isActive() {
    return this.active;
  }

  activate(x, y) {
    this.position.startPoint.x = x;
    this.position.startPoint.y = y;
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
    this.angle = Math.random() * 2 * Math.PI;
    this.position.currentPoint.x = this.position.startPoint.x;
    this.position.currentPoint.y = this.position.startPoint.y;
    this.position.velocityX = Math.cos(this.angle) * this.velocity;
    this.position.velocityY = Math.sin(this.angle) * this.velocity;
    this.position.priorPoints = [];
    this.graphicRef.current.setAttribute("opacity", 1);
  }

  updateVelocity() {
    this.position.velocityX += this.position.accelerationX;
    this.position.velocityY += this.position.accelerationY;
  }

  updatePosition() {
    const pastPoint = new Point(Math.floor(this.position.currentPoint.x), Math.floor(this.position.currentPoint.y))
    this.position.priorPoints.unshift(pastPoint);
    this.position.currentPoint.x += this.position.velocityX;
    this.position.currentPoint.y += this.position.velocityY;
    if (this.position.priorPoints.length > 12) {
      this.position.priorPoints.pop();
    }
  }

  bounceX() {
    if (this.position.currentPoint.x > this.position.mx) {
      this.position.currentPoint.x = this.position.mx;
      this.position.velocityX *= -1;
    } else if (this.position.currentPoint.x < 0) {
      this.position.currentPoint.x = 0;
      this.position.velocityX *= -1;
    }
  }

  bounceY() {
    if (this.position.currentPoint.y > this.position.my) {
      this.position.currentPoint.y = this.position.my;
      this.position.velocityY *= -1;
    }
  }

  fellToEarth() {
    if (
      this.position.currentPoint.y > this.position.my + 10
    ) {
      return true;
    }
    return false;
  }

  draw() {
    this.graphicRef.current.setAttribute("cx", this.position.currentPoint.x);
    this.graphicRef.current.setAttribute("cy", this.position.currentPoint.y);
    this.graphicRef.current.setAttribute(
      "opacity",
      1 - this.position.currentPoint.y / 500
    );

    let str = `M${this.position.priorPoints[0].x} ${this.position.priorPoints[0].y}`;
    this.position.priorPoints.forEach((point) => {
      str = `${str} L${point.x} ${point.y}`;
    });

    this.trailRef.current.setAttribute("d", str)
    this.trailRef.current.setAttribute(
      "opacity",
      1 - this.position.currentPoint.y / 250
    );


  }

  render() {
    return (
      <>
        <circle
          ref={this.graphicRef}
          cx={this.position.currentPoint.x}
          cy={this.position.currentPoint.y}
          r={this.radius}
          fill={this.color}
          stroke="none"
          opacity={0}
        ></circle>
        <path ref={this.trailRef} d="" stroke="white" strokeWidth={1} fill="none" opacity={0}/>
      </>
    );
  }
}

export default Spark;
