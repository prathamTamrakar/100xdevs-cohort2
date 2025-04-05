
// what is the diff btw type and imterface

type Users = {
    firstName: string,
    lastName: string,
    age: number
}

// Union
// aggregate data together.
type GreetArg = number | string

function greets(id: GreetArg) {
    console.log(`ID: ${id}`);
}

greets(1)
greets('1')

// Intersection
// What if you want to create a type that has every property of multiple types/ interfaces

type Employees = {
    name: string;
    startDate: Date;
};

interface Manager {
    name: string;
    department: string;
};

type TeamLead = Employees & Manager;

const t: TeamLead = {
    name: 'pratham',
    startDate: new Date(),
    department: 'computer science'
}

