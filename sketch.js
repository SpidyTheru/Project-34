
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , canon , apple;

function preload() {
  canon.loadImage("canon.png")
}

function setup() {
  
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
   angleMode(DEGREES)
  angle = 15


  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);
  
 
}


function draw() 
{
 
  background(109);
  

  Engine.update(engine);

  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();
}

