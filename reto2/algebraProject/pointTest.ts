import { Point } from "./point";

let myPoint:Point = new Point(1,4);
let mySecondPoint:Point = new Point(3,7)
console.log(myPoint.toString());
console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(2);
myPoint.setY(3);
console.log(myPoint.toString());
console.log(myPoint.distanceTolOrigin());
console.log(myPoint.calculateDistance(mySecondPoint));

