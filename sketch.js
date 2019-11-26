
let myObj = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(50);

  for (var i = 0; i < myObj.length; i++) {

    var Gravity = createVector(0,0.2*myObj[i].mass);
    myObj[i].show();
    myObj[i].edges();
    myObj[i].applyForce(Gravity);
    for (var j = 0; j < myObj.length; j++) {
      if (i != j) {myObj[i].collition(myObj[j]);}
    }
  }

}

function mousePressed() {
    myObj.push(new Circle(mouseX,mouseY,25,random(1,25)));
}
function mouseDragged() {
    myObj.push(new Circle(mouseX,mouseY,25,random(1,25)));
}
