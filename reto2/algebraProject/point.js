"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setX = function (newX) {
        this.x = newX;
    };
    Point.prototype.setY = function (newY) {
        this.y = newY;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceTolOrigin = function () {
        var A = [0, 0];
        var B = [this.x, this.y];
        var distanceAB;
        distanceAB = Math.sqrt(Math.pow((B[0] - A[0]), 2) + Math.pow((B[1] - A[1]), 2));
        return Number(distanceAB.toFixed(3));
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var x1 = this.x;
        var y1 = this.y;
        var x2 = anotherPoint.x;
        var y2 = anotherPoint.y;
        var distanceAB;
        distanceAB = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return Number(distanceAB.toFixed(3));
    };
    return Point;
}());
exports.Point = Point;
;
