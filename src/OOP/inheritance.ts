class Person {
    constructor (public firstName : string, public lastName : string){}

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    walk(){
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

let student = new Student (1, 'Zlata', 'karbovska');
