/*class Human {
    constructor() {
        this.gender = 'female';
    }
    printGender() {
        console.log(this.gender);
    }
}
class Person extends Human {
    constructor() {
        super();
        this.name = 'swetha';
    }
    printName() {
        console.log(this.name);
    }
}
const person = new Person();
person.printName();
person.printGender();*/

class Human {
    gender = 'female';
    printGender = () => {
        console.log(this.gender);
    }
}
class Person extends Human {
    name = 'swetha';
    printName = () => {
        console.log(this.name);
    }
}
const person = new Person();
person.printName();
person.printGender();