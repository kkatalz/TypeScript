class Person {
    constructor (public firstName : string, public lastName : string){}

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    protected walk(){ // used only within the class + can be inherited 
        console.log("walking");
    }
}

class Student extends Person {
    constructor (public id : number, firstName : string, lastName : string ){
        super(firstName, lastName);
    }
    takeTest(){
        console.log('Taking a test');   
    }
}

class Teacher extends Person{
    override get fullName(){
        return 'Professor ' + super.fullName;
    }
}

printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Mosh', 'hamedani')
])

function printNames(people : Person[]){
    for (let person of people)
        console.log(person.fullName);
}