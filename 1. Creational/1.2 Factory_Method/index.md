# Factory method pattern

The Factory method pattern provides an interface for creating objects that can be modified after creation. The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.


Using function

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