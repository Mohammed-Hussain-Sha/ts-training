class Car {
    brand:string;
    model:string;
    year:number | string;

    constructor(br: string, mo:string, yr:number){
        this.brand = br;
        this.model = mo;
        this.year = yr;
    }

    displayDeails(): void {
        console.log(`This car is a ${this.brand} ${this.model} ${this.year}.`);
    }
}

let myCar = new Car("Toyota","corolla",2025);
myCar.displayDeails();

let car2 = new Car("Renault","Triber",2024);
car2.displayDeails();