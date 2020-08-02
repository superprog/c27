
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new roof(400,400,150,15);
	
	bob1=new Bob(335,550,40);
	bob2=new Bob(365,550,40);
	bob3=new Bob(395,550,40);
	bob4=new Bob(425,550,40);
	bob5=new Bob(455,550,40);
	rope1=new Rope(bob3.body,ground.body,0,0)
	rope2=new Rope(bob2.body,ground.body,-29,0)
	rope3=new Rope(bob1.body,ground.body,-58,0)
	rope4=new Rope(bob4.body,ground.body,29,0)
	rope5=new Rope(bob5.body,ground.body,58,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange")
  
  drawSprites();
  
ground.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}
