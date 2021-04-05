var garden, gardenImage

function preload() {
    //load the images here
    gardenImage = loadImage("garden.png")
}

function setup(){
    createCanvas(800,800);
    garden = createSprite(400. 400, 50, 50)
    garden.addImage(gardenImage)

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}