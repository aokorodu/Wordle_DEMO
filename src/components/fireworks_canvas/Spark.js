import React from "react";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Spark {
  constructor(ctx) {
    this.ctx = ctx;
    this.velocity = Math.random() * 5 + 0.1;
    this.angle = Math.random() * 2 * Math.PI;
    this.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    this.radius = Math.round(1 + Math.random() * 2);
    this.numberOfPoints = 35;
    this.position = {
      startPoint: new Point(0, 0),
      currentPoint: new Point(0, 0),
      priorPoints: [],
      mx: 500,
      my: 500,
      velocityX: Math.random() * 8 - 4, //Math.cos(this.angle) * this.velocity,
      velocityY: Math.random() * 8 - 4, //Math.sin(this.angle) * this.velocity,
      accelerationX: 0,
      accelerationY: 0.05,
    };
    this.count = 0;
    this.active = false;
    this.tau = Math.PI * 2;

    this.lifespan = 200;
    this.lifeDX = .5 + Math.random();
  }

  isActive() {
    return this.active;
  }

  activate(x, y) {
    this.active = true;
    this.position.startPoint.x = x;
    this.position.startPoint.y = y;
    this.position.currentPoint.x = this.position.startPoint.x;
    this.position.currentPoint.y = this.position.startPoint.y;
    this.position.velocityX = Math.cos(this.angle) * this.velocity;
    this.position.velocityY = Math.sin(this.angle) * this.velocity;
    this.position.priorPoints = [];
    this.lifespan = 200;
  }

  deactivate() {
    this.active = false;
  }

  update() {
    if (!this.active) return;

    this.updateVelocity();
    this.updatePosition();
    this.updateLifespan();
    this.draw();
    if (this.fellToEarth()) this.deactivate();
  }

  updateLifespan() {
    if(this.lifespan <= 0) return;

    this.lifespan -= this.lifeDX;
  }

  updateVelocity() {
    this.position.velocityX += this.position.accelerationX;
    this.position.velocityY += this.position.accelerationY;
  }

  updatePosition() {
    const pastPoint = new Point(
      Math.floor(this.position.currentPoint.x),
      Math.floor(this.position.currentPoint.y)
    );
    this.position.priorPoints.unshift(pastPoint);
    this.position.currentPoint.x += this.position.velocityX;
    this.position.currentPoint.y += this.position.velocityY;
    if (this.position.priorPoints.length > this.numberOfPoints) {
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
    if (this.lifespan <= 0) {
      return true;
    }
    return false;
  }

  drawCircle() {
    this.ctx.beginPath();
    this.ctx.globalAlpha = this.lifespan/200;
    this.ctx.arc(
      this.position.currentPoint.x,
      this.position.currentPoint.y,
      this.radius,
      0,
      this.tau
    );
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  drawTrail(){
    this.ctx.globalAlpha = this.lifespan/200;
    this.ctx.beginPath();
    this.ctx.moveTo(this.position.currentPoint.x, this.position.currentPoint.y);
    this.position.priorPoints.forEach((point)=>{
      this.ctx.lineTo(point.x, point.y);
    })
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  }

  draw() {
    this.drawCircle();
    this.drawTrail();
  }
}

export default Spark;
