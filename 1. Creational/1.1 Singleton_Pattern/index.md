# Singleton Pattern

Ensures that a class has only one instance and provides a global point of access to that instance.

Singleton is a design pattern that ensures that a class has only one immutable instance. Said simply, the singleton pattern consists of an object that can't be copied or modified. It's often useful when we want to have some immutable single point of truth for our application.

## Real-World Use Cases

The Singleton Pattern is useful in various scenarios, including:

- `Managing Configuration Settings:` You can use a Singleton to manage configuration settings for your application, ensuring that there's a single source of truth for configuration values.

- `Logger and Error Handling:`  A Singleton can be employed to maintain a centralized logging or error handling mechanism, allowing you to consolidate log entries or error messages.

- `Database Connections:` When dealing with databases, you might want to use a Singleton to ensure that there's only one database connection shared across the application to minimize resource consumption.

- `Caching:` Implementing a Singleton for caching frequently used data can help optimize performance by maintaining a single cache instance.

## Implementation using Function

        const singleton = (function () {
            let instance = null;

            function createInstance() {
                return {
                    name: "Abhishek",
                    age: 28,
                    marks: Math.floor(Math.random() * 10)
                }
            }

            return {
                getInstance: () => {
                    if (!instance) {
                        instance = createInstance();
                    }
                    return instance;
                }
            }
        })();

        const a = singleton.getInstance();
        const b = singleton.getInstance();

        console.log(a) // { age: 28, marks: 9, name: "Abhishek" }
        console.log(b) // { age: 28, marks: 9, name: "Abhishek" }

## Implementation using Class

        class MyClass {
            constructor() {
                if (MyClass._instance) {
                    return MyClass._instance
                }
                MyClass._instance = this;
            }
        }

        const instanceOne = new MyClass();
        const instanceTwo = new MyClass();
        console.log(instanceOne === instanceTwo); // true
       

