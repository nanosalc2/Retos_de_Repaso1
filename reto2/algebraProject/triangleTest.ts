import { Point } from "./point";
import { Triangle } from "./triangle";

let myPoint:Point = new Point(1,4);
let mySecondPoint:Point = new Point(3,0);
let mythirdPoint:Point = new Point(2,9);
let triangulo:Triangle = new Triangle(myPoint,mySecondPoint,mythirdPoint);

console.log(triangulo.calculateLengthSides());