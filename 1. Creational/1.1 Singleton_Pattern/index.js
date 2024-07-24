// Implementation using Function

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


// Implementation using Class

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


