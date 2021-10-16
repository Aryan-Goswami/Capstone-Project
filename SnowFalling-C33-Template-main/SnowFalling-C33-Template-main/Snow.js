class Snow{
    constructor(x,y,width,height){
        var options ={
            restitution:1,
        }
        this.bodies = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.bodies)
        this.width = width
        this.height = height
        this.snow1 = loadImage("snow3.jpg")
    }
  display(){
     
      push()
      translate(this.bodies.position.x,this.bodies.position.y)
      rotate(this.bodies.angle)
       imageMode(CENTER)
       image(this.snow1,0,0,this.width,this.height)
      pop()
  }


}















