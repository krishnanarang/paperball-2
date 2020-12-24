class Paper{
    constructor(x,y){
            var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            
        }
              this.body = Matter.Bodies.circle(x,y,60,options)
        World.add(world,this.body);
        this.image =loadImage("sprite/paperball.png")
        
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        //fill("pink");
       // circle(0,30,60);
        pop();
        
    }
}