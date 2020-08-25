//var ground;




function setup() {
  createCanvas(480,800);
  createSprite(600, 700, 1000, 50);

}

var particles = [];
var plinkos = [];
var division = [];
var divisionHeight = 300;

for(var k=0; k< width; k=k+80){
  division.push(new Divisions(k, height = divisionHeight/2, 10, divisionHeight ));
}

for (var j=40; j<particles.length; j++){  
  particles[j].display();
}

for (var k=40; k<divisions.length; k++){
  divisions[k].display();
}

function draw() {
  background(255,255,255);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
  //ground.display();  
  drawSprites();
}