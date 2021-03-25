class ball {
    constructor(x,y,r) {
        var options={
        
           frictionAir:0.02,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
   this.r=r
   
    }  
    display(){
        var pos=this.body.position
        var angle=this.body.angle
   push()
   ellipseMode(RADIUS)
   rotate(angle)
  ellipse(pos.x,pos.y,this.r,this.r)
   pop()
    }
   }