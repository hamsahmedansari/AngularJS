// AssessModifiers 
// 1. public : available on instances everywhere
// 2. private : not available for access outside the class. 
// 3. protected : available on child classes but not on instances directly.
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('value of x : ' + this.x);
        console.log('value of y : ' + this.y);
    };
    return Point;
}());
// to access this class and its component's we need to create object of it
var point = new Point(1, 2);
//    point.x = 1; (error)
//    point.y = 2; (error)
point.draw();
