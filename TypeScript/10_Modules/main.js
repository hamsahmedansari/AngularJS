"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(1);
console.log('Get x value : ' + point.X);
//Setting X value to 2
point.X = 2;
//logging X value
point.draw();
