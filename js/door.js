class Door{
     constructor(x,y,width,heiht){
        
         this.body=Bodies.rectangle(x,y,width,height);
         World.Add(world,this.body);
     }
     display(){
         rectMode (CENTER);
         fill("brown");
         
         rect(this.body.position.x,this.body.position.y,this.width,this.height);
     }
}



