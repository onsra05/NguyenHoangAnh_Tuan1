"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(ma, mb, mc) {
        this.ma = ma || 0;
        this.mb = mb || 0;
        this.mc = mc || 0;
        if (this.isInvalidTriangle()) {
            this.ma = this.mb = this.mc = 0;
        }
    }
    Triangle.prototype.isInvalidTriangle = function () {
        return this.ma <= 0 || this.mb <= 0 || this.mc <= 0 || this.ma + this.mb <= this.mc || this.ma + this.mc <= this.mb || this.mb + this.mc <= this.ma;
    };
    //getter, setter
    Triangle.prototype.getMa = function () {
        return this.ma;
    };
    Triangle.prototype.setMa = function (ma) {
        if (ma > 0) {
            this.ma = ma;
        }
    };
    Triangle.prototype.getMb = function () {
        return this.mb;
    };
    Triangle.prototype.setMb = function (mb) {
        if (mb > 0) {
            this.mb = mb;
        }
    };
    Triangle.prototype.getMc = function () {
        return this.mc;
    };
    Triangle.prototype.setMc = function (mc) {
        if (mc > 0) {
            this.mc = mc;
        }
    };
    // calculate Triangle
    Triangle.prototype.calcPerimeter = function () {
        return this.ma + this.mb + this.mc;
    };
    Triangle.prototype.calcArea = function () {
        var s = this.calcPerimeter() / 2;
        return Math.sqrt(s * (s - this.ma) * (s - this.mb) * (s - this.mc));
    };
    Triangle.prototype.getTriangleType = function () {
        if (this.isInvalidTriangle()) {
            return "Invalid Triangle";
        }
        if (this.ma === this.mb && this.mb === this.mc) {
            return "Equilateral Triangle"; //Tam giac deu
        }
        else if (this.ma === this.mb || this.mb === this.mc || this.ma === this.mc) {
            return "Isosceles Triangle"; //Tam giac can
        }
        else {
            return "Scalene Triangle"; //Tam giac thuong
        }
    };
    Triangle.prototype.toString = function () {
        return "Triangle: ".concat(this.ma, ", ").concat(this.mb, ", ").concat(this.mc, " \n Type: ").concat(this.getTriangleType(), " \n Perimeter: ").concat(this.calcPerimeter(), " \n Area: ").concat(this.calcArea(), " \n\n");
    };
    Triangle.prototype.toObject = function () {
        return {
            size: "".concat(this.ma, ", ").concat(this.mb, ", ").concat(this.mc),
            type: "".concat(this.getTriangleType()),
            perimeter: "".concat(this.calcPerimeter()),
            area: "".concat(this.calcArea())
        };
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var main = function () {
    var triangle1 = new Triangle(3, 4, 5);
    var triangle2 = new Triangle(-1, 2, 3); // Khong phai tam giac
    var triangle3 = new Triangle(5, 5, 5); // Tam giac deu
    var triangle4 = new Triangle(5, 5, 6); // Tam giac can
    var triangle5 = new Triangle(7, 8, 9); // Tam giac thuong
    var triangles = [triangle1, triangle2, triangle3, triangle4, triangle5];
    // Print table triangle
    console.log("Table Triangle:");
    var arr = [];
    triangles.forEach(function (triangle, index) {
        arr.push(triangle.toObject());
    });
    console.table(arr);
};
