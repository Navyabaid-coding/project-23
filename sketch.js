const Engine =Matter. Bodies;
const World= Matter.Engine;
const Bodies= Matter.World;
const Constraint= Matter.Constraint;

 
var engine,world;
var door,towers;
var ground,position;


function setup() {
 var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 door = new Door(50,170,100,120);
 ground = new Ground(10,10,400,20);

}

function draw() {
   Engine.update(engine);
  door.display();
  ground.display();

  drawSprites();
}