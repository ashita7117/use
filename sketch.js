
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,paper1;
var ground;
function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

paper1=new Paper(70,470,8,8);
box1=new Box(600,477,200,7,PI/2);
box2=new Box(500,457,7,50,)
box3=new Box(700,457,7,50,)
ground =new Box(600,490,1200,10);

	Engine.run(engine);
  
}


function draw() {
  background(200);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }
}


