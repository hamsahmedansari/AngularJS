// AssessModifiers 
// 1. public : available on instances everywhere
// 2. private : not available for access outside the class. 
// 3. protected : available on child classes but not on instances directly.


class Point {
    private x: number;
    private y: number;

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
//    point.x = 1; (error)
//    point.y = 2; (error)
   point.draw();
