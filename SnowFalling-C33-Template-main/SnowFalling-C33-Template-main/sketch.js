
var backgroundImg
var snow
var snowarr=[]
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
function preload() {
  backgroundImg = loadImage("snow2.jpg")




}



function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  // createSprite(400, 200, 50, 50);




}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)

  if(frameCount%100 === 0)
  {
    snow = new Snow(Math.round(random(10,700)), 10,20,20)
    snow.display()
  }






  drawSprites();
}