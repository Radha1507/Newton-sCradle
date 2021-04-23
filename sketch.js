
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roofObject;
var r1,r2,r3,r4,r5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
 roofObject = new roof(400,250,230,50);

 bob1 = new bob(320,575,40);
 bob2 = new bob(360,575,40);
 bob3 = new bob(400,575,40);
 bob4 = new bob(440,575,40);
 bob5 = new bob(480,575,40);

 r1 = new rope(bob1.body,roofObject.body,-80,0);
 r2 = new rope(bob2.body,roofObject.body,-40,0);
 r3 = new rope(bob3.body,roofObject.body,0,0);
 r4 = new rope(bob4.body,roofObject.body,40,0);
 r5 = new rope(bob5.body,roofObject.body,80,0);
 


	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
      Matter.Body.applyForce(bob1.body,bob1.body.position,
        {x:-50,y:-45});
	
      }
	}

function draw() {
  rectMode(CENTER);
  background(230);
  
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

   roofObject.display();

   r1.display();
   r2.display();
   r3.display();
   r4.display();
   r5.display();

   console.log(bob3.y);
 
}

