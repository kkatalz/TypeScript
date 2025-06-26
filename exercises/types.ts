// Given the data below, define a type alias for representing users
type User = {
    name : string,
    age : number,
    occupation? : string
}

let users : User[] = [
      {
        name: 'John Smith',
        age : 30,
        occupation:'Software engineer'
    }, 
     {
        name:'Kate Müller',
        age:28
    }
];

// Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
type Bird = {
    fly : () => void
};

type Fish = {
    swim : () => void
};

type Pet = Bird | Fish;
let pet : Pet = {
    fly : () => console.log('I am fish that swims')
};

// Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' |
                 'Friday' | 'Saturday' | 'Sunday';
let vacationDay : DayOfWeek = 'Monday';

// Simplified code snippets
type MyUser = {
    address?: {
        street?: string
    }
}

function getUser () : MyUser | null {
    return {
        address: {
            street : "London, 123"
        }
    }
}

let myUser = getUser();
console.log(myUser?.address?.street) // optional chaining

// Simplified this 
// let x = foo !== null && foo !== undefined ? foo : bar();

function bar() : string {
    return "Woof"
}
let foo : string | null = null;
let x = {
    foo: foo ?? bar() // nullish coalescing
};
