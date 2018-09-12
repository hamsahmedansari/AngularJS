// AssessModifiers with constructor


class Point {

    draw (){
        console.log('value of x : ' + this.x);
        console.log('value of y : ' + this.y);
    }
    constructor(private x? :number ,private  y? :number){
    }
}

// to access this class and its component's we need to create object of it

   let point = new Point(1,2);
   point.draw();
