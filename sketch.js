var dog, dogImg, hdogImg
var database;
var foodS,foodStock

function preload()
{
  dogImg = loadImage("dogImg.png");
  hdogImg = loadImage("dogImg1.png");
  
}

function setup() {
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
	createCanvas(800, 700);
  dog = createSprite(400,550);
  dog.addImage(dogImg);
 
}


function draw() {

  background(0,120,70);
  dog.scale=0.4;

  if(keyWentDown(UP_ARROW)//&&foodS>=1
  ){
    writeStock(foodS);
    dog.addImage(hdogImg);
}
  drawSprites();
 
text("Milk Left : "+foodS,250,50);

}

function writeStock(x){

  if(x<=0){
    x=0;
  }

  else{
    x=x-1;
  }

database.ref('/').update({
  Food:x
})
}

function readStock(data){
  foodS = data.val();
 
}