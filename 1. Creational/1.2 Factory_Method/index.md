# Factory method pattern

The Factory Pattern is a creational pattern that provides an interface for creating objects but allows subclasses to alter the type of objects that will be created. It encapsulates the object creation process, making it more flexible and decoupled from the client code.


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