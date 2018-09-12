// AssessModifiers with constructor
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
point.draw();
