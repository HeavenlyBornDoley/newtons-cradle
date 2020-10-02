
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(50,200);

	bob1 = new bob(250,200);
	bob2 = new bob(250,200);
	bob3 = new bob(250,200);
	bob4 = new bob(250,200);
	bob5 = new bob(250,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rope.fly();
}

