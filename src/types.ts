let sales: number =123_456_789;
let course: string = "TypeScript";
let is_published : boolean = true;

let c = [true, false, false]; 
let d = {age:20}; 
let e = [3];
let f;
let g = [];

// Tuple
let user: [number, string] = [1, "Zlata"];

// Enum
enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions 
function calculateTax(income: number, taxYear = 2022): number{
    if (taxYear  < 2022){
        return income *1.2;
    }
    return income * 1.3;
}

calculateTax(10_000);

// Objects
let employee: {
    readonly id : number,
    name: string,
    retire: (date: Date) => void
} = {
    id:1,
    name : 'Zlata',
    retire: (date:Date ) => {
        console.log(date); 
    }};



