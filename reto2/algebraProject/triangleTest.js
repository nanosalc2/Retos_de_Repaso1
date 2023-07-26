"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var myPoint = new point_1.Point(1, 4);
var mySecondPoint = new point_1.Point(3, 0);
var mythirdPoint = new point_1.Point(2, 9);
var triangulo = new triangle_1.Triangle(myPoint, mySecondPoint, mythirdPoint);
console.log(triangulo.calculateLengthSides());
