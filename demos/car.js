var Car = /** @class */ (function () {
    function Car(br, mo, yr) {
        this.brand = br;
        this.model = mo;
        this.year = yr;
    }
    Car.prototype.displayDeails = function () {
        console.log("This car is a ".concat(this.brand, " ").concat(this.model, " ").concat(this.year, "."));
    };
    return Car;
}());
var myCar = new Car("Toyota", "corolla", 2025);
myCar.displayDeails();
var car2 = new Car("Renault", "Triber", 2024);
car2.displayDeails();
