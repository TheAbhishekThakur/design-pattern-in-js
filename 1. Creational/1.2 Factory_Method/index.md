# Factory method pattern

The Factory Pattern is a creational pattern that provides an interface for creating objects but allows subclasses to alter the type of objects that will be created. It encapsulates the object creation process, making it more flexible and decoupled from the client code.

## When to Use Which Pattern
when you want to encapsulate the object creation process and provide a simple interface for creating objects with different implementations.


## Implementation Using function

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

## Implementation using Class

    class Car {
        display() {
            console.log("Car Class");
        }
    }

    class Bike {
        display() {
            console.log("Bike Class");
        }
    }

    class ProductFactory {
        getProduct = (value) => {
            switch (value) {
                case 1: {
                    const car = new Car();
                    car.display();
                    break;
                }
                case 2: {
                    const bike = new Bike();
                    bike.display();
                    break;
                }
                default:
                    return null;
            }
        }
    }

    const factory = new ProductFactory();

    factory.getProduct(1);
    factory.getProduct(2);
