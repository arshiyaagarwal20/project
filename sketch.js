 const Bodies=Matter.Bodies
 const Engine=Matter.Engine
 const World=Matter.World
 const Constraint=Matter.Constraint
var ground
function setup() {
  createCanvas(1500,800);
 engine=Engine.create()
world=engine.world
ground=Bodies.rectangle(750,600,1500,20,{isStatic:true});
box1=new Box(200,600,200,200)
box2=new Box(500,900,200,200)

World.add(world,ground)

}
function draw() {
  background(255,255,255); 
Engine.update(engine)

rectMode(CENTER)
rect(ground.position.x,ground.position.y,1500,20)
box1.display();
box2.display();

}