function Circle(x,y,r,m) {
  //base
    this.r = r;
    this.col = color(255,255,255);
  //physic
    this.mass = m;
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
  //functions

  this.show = function() {
    fill(this.col);
    circle(this.pos.x, this.pos.y, this.r);
  }

  this.changeColor = function () {
    this.col = color(random(255),random(255),random(255));
  }

  this.upDate = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
    this.upDate();
  }

  this.edges = function() {
    if (this.pos.y >= height-10) {
      this.vel.y *= -1;
      this.pos.y = height-10;
    }
    if (this.pos.x >= width-10) {
      this.vel.x *= -1;
      this.pos.x = width-10;
    }
  }

  this.collition = function(other) {
    var dis = dist(this.pos.x,this.pos.y,other.pos.x,other.pos.y);
    if (dis <= this.r) {
      var ThisMomentum = this.mass*this.acc;
      var OtherMomentum = other.mass*other.acc;
      if (ThisMomentum > OtherMomentum) {
        //do something later
      } else {
        //do something else later
      }
      this.changeColor();
    }
  }



}
