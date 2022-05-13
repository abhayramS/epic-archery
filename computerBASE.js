class ComputerBase {
    constructor(x,y,width,height){
    var options = {
    isStatic:
    };
    
   };


this.body = Bodies.rectangle(x, y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("./assest/base2.png");

 World.add(world, this.body);
};
 display()

 var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0 this.width, this.height)

pop();
 

playerBase = new playerBase(300,random(450,height - 300),180,150);
plater = new Player(285,playerBase.body.position.y-150,50,180);


