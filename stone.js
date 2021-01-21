class Stone {
  constructor(x,y,r) {
    var options = {
      isStatic: true,
      restitution: 0,
      friction: 1,
      density: 1.2
    }
    this.body = Bodies.circle(x,y,r,options);
    this.image = loadImage("Plucking mangoes/stone.png");
    this.x = x;
    this.r = r;
    this.y = y;
  
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    eclipseMode(CENTER);
    eclipse(pos.x, pos.y, this.width, this.height);
  }
}


