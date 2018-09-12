// we use class for collision to put same data in one class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('value of x : ' + this.x);
        console.log('value of y : ' + this.y);
    };
    return Point;
}());
// to access this class and its component's we need to create object of it
var point = new Point;
point.x = 1;
point.y = 2;
point.draw();
