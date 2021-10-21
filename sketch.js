var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

var player,imgPlayer;
var moeda,imgMoeda;
var chaoInvisivel,ImgFundo;
var boss,imgBoss;
var engine,world;
var Canvas


function preload(){
ImgFundo
}
function setup(){
Canvas = createCanvas(displayWidth,displayHeight- 150);
  engine = Engine.create();
  world = engine.world;
  chaoInvisivel = createSprite(width/2,height - 300,width,10);
  chaoInvisivel.visible = false
}
function draw(){
  background(0);
 drawSprites();
}
