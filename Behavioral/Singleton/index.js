// Using function
function Developer(name) {
    this.name = name;
    this.type = "Developer"
}

function Tester(name) {
    this.name = name;
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1: {
                return new Developer(name);
            }
            case 2: {
                return new Tester(name);
            }
            default:
                break;
        }
    }
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Abhishek", 1));
employees.push(employeeFactory.create("Rahul", 2));

employees.forEach((emp) => {
    console.log(emp);
});



// Using Class
class Car {
    constructor() {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor() {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMM!!")
}

class Motorcycle {
    constructor() {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssshhhhhhhhhhham!!")
}

const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car");
const truck = vehicleFactory.createVehicle("truck");
const motorcycle = vehicleFactory.createVehicle("motorcycle");

console.log(car, truck, motorcycle);
