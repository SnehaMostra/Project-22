const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var engine,world,fairy,star;

function preload()
{
   //preload the images here
   fairy = loadImage("fairy.png");
   fairy1 = loadImage("fairy1.png");
   fairy2 = loadImage("fairy2.png");
   star = loadImage("star.png");
   starnight = loadImage("starnight.png");
}

function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;
  var ground_options={
    isStatic: true
  }

  var ball_options={
    restitution: 1.0
  }

  fairy = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  star = Bodies.rectangle(750,50,20,ball_options);
  World.add(world,ball);

}


function draw() {
  background("black");

  Engine.update(engine);

  rectMode(CENTER);
  rect(fairy.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(star.position.x,ball.position.y,20);

}
