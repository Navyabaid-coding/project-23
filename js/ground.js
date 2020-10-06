class Ground{
    constructor(x,y,width,height){
    var options = {
        isStatic : true
    
    }
     World.add(world,this.body);
     this.body= Bodies.rectangle(x,y,width,height,options);
        }

        display(){
          var pos = this.body.position;
          rect(pos.x,pos.y,this.width,this.height);  
        }
}        



