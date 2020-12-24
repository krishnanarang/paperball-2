var ground,object1,object2,object3,ball;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}
function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;
    
	
	ground = new Ground(600,500,1200,10);
	object1 = new Dustbin(710,490,200,10);
	object2 = new Dustbin(700,400,10,100);
	object3 = new Dustbin(900,400,10,100);
	ball = new Paper(200,445,20,20);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120,120,120);
  ground.display();
  object1.display();
  object2.display();
  object3.display();
  ball.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:420,y:-900})
	}
}





