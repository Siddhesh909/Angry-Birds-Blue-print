class Box{
    constructor(x , y , w , h){
        var options = {
            restitution: 0.5 
        }
        this.body = Bodies.rectangle(x , y , w , h , options);
        World.add(world , this.body);
        this.w = w;
        this.h = h;
    }
    display() {
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x , position.y );
        rotate(angle);
        fill("gold");
        rectMode(CENTER);
        rect(0 , 0 , this.w , this.h);
        pop();
    }
}