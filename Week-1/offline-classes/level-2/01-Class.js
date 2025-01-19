class Animal {
    constructor(name, legcount) {
        this.name = name;
        this.legcount = legcount;
    }

    describe() {
        return `${this.name} has ${this.legcount} legs`;
    }
}

// static method in class is used to create utility functions

let dog = new Animal('dog', 4) // Create Object
console.log(dog.legcount); // 4
console.log(dog.describe()); // dog has 4 legs
// Call function on object 

