class Paper {
constructor(x,y,r){
var options = {
    isStatic:false,
    'density':1.2,
    'friction':0.7,
    'restitution':0.3
};
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)
}
display(){
    var pos=this.body.position

    push();
    translate(pos.x,pos.y);
    strokeWeight(1);
    fill("red");
    ellipse(0,0,this.r,this.r);
     pop();
}
}