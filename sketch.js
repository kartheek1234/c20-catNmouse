var mouse,mouse1,mouse2mouseImg;
var cat,cat1,cat2,catImg;
var garden,gardenImg;

function preload() {
    //load the images here

    catImg = loadAnimation("cat2.png","cat3.png")
    cat1 = loadAnimation("cat1.png")
    cat2 = loadAnimation("cat4.png")
    mouseImg = loadAnimation("mouse2.png","mouse3.png")
    mouse1 = loadAnimation("mouse1.png")
    mouse2 = loadAnimation("mouse4.png")
    gardenImg = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    //garden = createSprite(200,200,20,20)
    //garden.addImage(gardenImg)
    cat = createSprite(580,470,20,20)
    
    cat.addAnimation("cat1",catImg)
    cat.addAnimation("cat2",cat2)
    cat.scale = 0.12
    cat.debug = true
    mouse = createSprite(130,460,20,20)
    mouse.addAnimation("mouse",mouse1)
    
    mouse.addAnimation("mouse2",mouse2)
    mouse.debug = true;
    mouse.scale = 0.12
}

function draw() {

    background(gardenImg);

    
    //Write condition here to evalute if tom and jerry collide
    //keyPressed()

    if(keyCode === LEFT_ARROW){
    
      cat.velocityX = -5
      cat.addAnimation("cat",cat1)
      mouse.addAnimation("mouse1",mouseImg)
      mouse.changeAnimation("mouse1",mouseImg)
      
      cat.frameDelay = 25
      cat.changeAnimation("cat1",catImg)
    }
    if( mouse.x - cat.x < (cat.width + mouse.width)/2){
        mouse.velocityX = 0
        //mouse.changeAnimation("mouse2",mouse2)
       
        cat.velocityX = 0
       //cat.changeAnimation("cat2",cat2)
    }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  


}
