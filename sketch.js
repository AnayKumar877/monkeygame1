 var monkey , monkey_running
 var banana ,bananaImage, obstacle, obstacleImage
 var FoodGroup, obstacleGroup
 var score

 function preload(){
 monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  }
 function setup() {
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale = 0.1
 ground = createSprite(400,350,900,10);
 ground.velocityX = -5;
 ground.x = ground.width/2;
 FoodGroup = new Group();
 obstaclesGroup = new Group();
 score = 0;
 var suvivalTime = 0;
 }
 function draw() {
 background("white");
 if(ground.x < 0) {
 ground.x=ground.width/2;
 }
 if(keyDown("space") ) {
 monkey.velocityY = -10;
 }
 monkey.velocityY = monkey.velocityY + 0.5;
 monkey.collide(ground);   
 spawnFood();
 spawnObstacles();
 drawSprites();
 
 if(obstaclesGroup.isTouching(monkey)){
 ground.velocityX = 0;
 monkey.velocityY = 0;
 obstaclesGroup.setVelocityXEach(0);
 FoodGroup.setVelocityXEach(0);
 obstaclesGroup.setLifetimeEach(-1);
 FoodGroup.setLifetimeEach(-1);
 }
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime = Math.ceil(frameCount/frameRate()) 
 text("Survival Time: "+ survivalTime, 100,50);
 }
 function spawnFood() {
 //write code here to spawn the Food
 if (frameCount % 80 === 0) {
 banana = createSprite(600,250,40,10);
 banana.y = random(120,200);    
 banana.velocityX = -5;
 banana.lifetime = 300;
 monkey.depth = banana.depth + 1;
 banana.addImage(bananaImage);
 banana.scale = 0.1;
 FoodGroup.add(banana);
 }
 }
 function spawnObstacles() {
 if(frameCount % 300 === 0) {
 obstacle = createSprite(800,320,10,40);
 obstacle.velocityX = -5; 
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.14;
 obstacle.lifetime = 100;
 obstaclesGroup.add(obstacle);
 }
 }