var car1,splitter,deformater,deformation,speed,weight;


function setup() {
  
  createCanvas(900,104);
   

  car1 = createSprite(50,50,20,20);
  car1.shapeColor = "white";
    speed = random(60,50,45);
   car1.velocityX = speed;
   weight = random(2260,1522,3000);

  deformater = createSprite(870,100,20,1200);

  splitter = createSprite(50,100,6000,5);
  splitter.shapeColor = "blue";
  
 
}


function draw() {
 
   
  if(car1.collide(deformater)){
    
    deformation = 0.5 * weight * speed * speed / 22500;
    
    if(deformation<100){
      car1.shapeColor = "green";
    }
    if(deformation>100 && deformation<180){
      car1.shapeColor = "yellow";
    }
    if(deformation>180){
      car1.shapeColor = "red";
    } 
   console.log(deformation);
  }
 
  background("black");  
  drawSprites();
}