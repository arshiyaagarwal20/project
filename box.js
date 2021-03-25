class Box{
 constructor(x,y) {
     var options={
         restitution:0.2,
         friction:1.0,
         density:0.5
     }
     this.body=Bodies.rectangle(x,y,50,50,options)
     World.add(world,this.body)


 }  
 display(){
     var pos=this.body.position
     var angle=this.body.angle
push()
rectMode(CENTER)
translate(pos.x,pos.y)
rotate(angle)
stroke("brown")
//strokeWeight(3)
rect(0,0,50,50)
pop()
 }
}