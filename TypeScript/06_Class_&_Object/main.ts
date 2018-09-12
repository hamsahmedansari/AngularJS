
// we use class for collision to put same data in one class

class Point {
     x: number;
     y: number;

     draw (){
         console.log('value of x : ' + this.x);
         console.log('value of y : ' + this.y);
     }
}

// to access this class and its component's we need to create object of it

    let point = new Point;
    point.x = 1;
    point.y = 2;
    point.draw();
