
class Point {
    x: number;
    y: number;

    draw (){
        console.log('value of x : ' + this.x);
        console.log('value of y : ' + this.y);
    }
    constructor(x? :number , y? :number){
        this.x = x;
        this.y = y;
    }
}

// to access this class and its component's we need to create object of it

   let point = new Point(1,2);
   point.draw();
