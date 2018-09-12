// Properties
// get 
// set
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('value of x : ' + this.x);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                console.log('value cannot be less than zero ');
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1);
console.log('Get x value : ' + point.X);
//Setting X value to 2
point.X = 2;
//logging X value
point.draw();
