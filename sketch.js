
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage, boy;
var stone1;
var tree, ground1;
var chain;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(257, 500, 10, 10);

	tree = new Tree(880, 520, 80, 80);

mango1 = new Mango(883, 521, 15);
mango2 = new Mango(885, 520, 15);
mango3 = new Mango(880, 522, 15);
mango4 = new Mango(882, 520, 15);
mango5 = new Mango(883, 527, 15);


	ground1 = new Ground(500, 595, 1000, 60)

	boy = createSprite(260, 530, 10, 10);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	chain = new Chain(stone1.body.x , boy.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
 
 tree.display();

 ground1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 chain.display();

  stone1.display();

  drawSprites();
}



