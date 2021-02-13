class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/glass.png");
    this.visible = 255
  }

 // display(){
    //if (this.body.speed<3) {
   //   super.display()
      
   // } else {
    //  World.remove(world,this.body)
    //  this.visible = this.visible - 5
     // push()
     // tint(255,this.visible)
     // image(this.image,this.body.position.x,this.body.position.y,50,50)
     // pop()
   // }
 // }

};
