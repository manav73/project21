var car,wall
var speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,5)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="yellow"
  bullet.velocityX = speed
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10) {
       wall.shapeColor=color(255,0,0)
    } 
    if(damage<10) {
      wall.shapeColor=color(0,255,0)
   }
  
  }
  drawSprites();
}
function hasCollided(ob1,ob2){
  bulletrightedge=ob1.x+ob1.width
  wallleftedge=ob2.x
  if(bulletrightedge>=wallleftedge) {
    return true
  }
  return false
}